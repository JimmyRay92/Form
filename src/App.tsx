import { FormEvent, useState } from "react";
import { UserForm } from "./components/UserForm";
import { useMultistepForm } from "./hooks/useMultiStepForm";

import SideNavbar from "./components/SideNavBar";
import SubscriptionForm, {
  BillingType,
  SubscriptionPlan,
} from "./components/SubscriptionForm";
import AddOnsForm from "./components/AddOnsForm";
import Summary from "./components/Summary";

type addOnName = "online service" | "larger storage" | "customizable profile";
export type addOn = {
  name: addOnName;
  addedOn: boolean;
  description: string;
};
const addOnData: addOn[] = [
  {
    name: "online service",
    addedOn: false,
    description: "access to multiplayer games",
  },
  {
    name: "larger storage",
    addedOn: false,
    description: "extra 1tb of cloud save",
  },
  {
    name: "customizable profile",
    addedOn: false,
    description: "custom theme on your profile",
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

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <SubscriptionForm {...data} updateFields={updateFields} />,
      <AddOnsForm
        addOns={data.addOns}
        updateAddOn={updateAddOn}
        billingType={data.billingType}
      />,
      <Summary />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  }

  return (
    <div
      style={{
        backgroundColor: "hsl(229, 24%, 87%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: "white",
          border: "1px solid black",
          padding: "0.5rem",
          margin: "1rem",
          borderRadius: ".5rem",
          fontFamily: "Arial",
          display: "flex",
        }}
      >
        <SideNavbar currentStepIndex={currentStepIndex} />
        <form style={{ padding: "0 3rem" }} onSubmit={onSubmit}>
          {step}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: ".5rem",
              justifyContent: "space-between",
              paddingTop: "4rem",
              paddingBottom: "1rem",
            }}
          >
            {!isFirstStep && (
              <button
                type="button"
                onClick={back}
                style={{
                  width: "5rem",
                  height: "2rem",
                  backgroundColor: "white",
                  outline: "none",
                  border: "none",
                }}
              >
                Back
              </button>
            )}
            <button
              style={{
                width: "5rem",
                height: "2rem",
                backgroundColor: "hsl(228, 100%, 84%)",
              }}
              type="submit"
            >
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
