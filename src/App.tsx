import { FormEvent, useState } from "react";
import { UserForm } from "./components/UserForm";
import { useMultistepForm } from "./hooks/useMultiStepForm";

import { AccountForm } from "./components/AccountForm";
import SideNavbar from "./components/SideNavBar";
import SubscriptionForm, {
  BillingType,
  SubscriptionPlan,
} from "./components/SubscriptionForm";

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
  subscription: SubscriptionPlan;
  billingType: BillingType;
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
  subscription: "arcade",
  billingType: "monthly",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <SubscriptionForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
      //   <div>Summary</div>,
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
