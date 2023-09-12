import React from "react";
import SideNavbar from "./SideNavBar";

type SignUpWizardProps = {
  currentStepIndex: number;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  step: JSX.Element;
  isFirstStep: boolean;
  isLastStep: boolean;
  back: () => void;
};

const SignUpWizard = ({
  currentStepIndex,
  onSubmit,
  step,
  isFirstStep,
  isLastStep,
  back,
}: SignUpWizardProps) => {
  return (
    <>
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
    </>
  );
};

export default SignUpWizard;
