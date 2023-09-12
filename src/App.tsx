import { useState } from "react";
import MainContainer from "./components/MainContainer";
import Nav from "./components/Nav";

function App() {
  const [currentStep, setCurrentStep] = useState<number | undefined>(1);

  return (
    <>
      <div className="app">
        <Nav
          onSelectStep={(step) => setCurrentStep(step)}
          currentStep={currentStep}
        />
        <MainContainer
          onValidNext={(next) =>
            next && currentStep ? setCurrentStep(currentStep + 1) : currentStep
          }
          onPrevious={(previous) =>
            previous && currentStep
              ? setCurrentStep(currentStep - 1)
              : currentStep
          }
          currentStep={currentStep}
        />
      </div>
    </>
  );
}

export default App;
