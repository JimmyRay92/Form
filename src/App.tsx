import { FormEvent, SetStateAction, useState } from "react";
import { UserForm } from "./components/UserForm";
import { useMultistepForm } from "./hooks/useMultiStepForm";

import SideNavbar from "./components/SideNavBar";
import SubscriptionForm, {
  BillingType,
  SubscriptionPlan,
} from "./components/SubscriptionForm";
import AddOnsForm from "./components/AddOnsForm";
import Summary from "./components/Summary";
import AppContainer from "./components/AppContainer";
import FormContainer from "./components/FormContainer";
import SignUpWizard from "./components/SignUpWizard";

type addOnName = "online service" | "larger storage" | "customizable profile";

export type addOn = {
  name: addOnName;
  addedOn: boolean;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
};
const addOnData: addOn[] = [
  {
    name: "online service",
    addedOn: false,
    description: "access to multiplayer games",
    monthlyPrice: "1",
    yearlyPrice: "10",
  },
  {
    name: "larger storage",
    addedOn: false,
    description: "extra 1tb of cloud save",
    monthlyPrice: "2",
    yearlyPrice: "20",
  },
  {
    name: "customizable profile",
    addedOn: false,
    description: "custom theme on your profile",
    monthlyPrice: "2",
    yearlyPrice: "20",
  },
];

export type FormData = {
  name: string;
  phoneNumber: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
  subscriptionPlan: SubscriptionPlan;
  billingType: BillingType;
  addOns: addOn[];
};

const INITIAL_DATA: FormData = {
  name: "",
  phoneNumber: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
  subscriptionPlan: "arcade",
  billingType: "monthly",
  addOns: addOnData,
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const updateAddOn = (addOn: addOn) => {
    setData((prev) => {
      // Map over the existing addOns array and update the addedOn property
      const updatedAddOns = prev.addOns.map((existingAddOn) => {
        if (existingAddOn.name === addOn.name) {
          return { ...existingAddOn, addedOn: !addOn.addedOn };
        }
        return existingAddOn;
      });

      return { ...prev, addOns: updatedAddOns };
    });
  };

  const {
    setCurrentStepIndex,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <SubscriptionForm {...data} updateFields={updateFields} />,
    <AddOnsForm
      addOns={data.addOns}
      updateAddOn={updateAddOn}
      billingType={data.billingType}
    />,
    <Summary
      subscriptionPlan={data.subscriptionPlan}
      billingType={data.billingType}
      addOns={data.addOns}
      editPlan={moveToIndex}
    />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  }

  function moveToIndex(index: SetStateAction<number>) {
    setCurrentStepIndex(index);
  }

  return (
    <AppContainer>
      <FormContainer>
        <SignUpWizard
          currentStepIndex={currentStepIndex}
          onSubmit={onSubmit}
          step={step}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          back={back}
        />
      </FormContainer>
    </AppContainer>
  );
}

export default App;
