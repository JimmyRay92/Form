import "./Nav.css";

interface Props {
  onSelectStep: (step: number | undefined) => void;
  currentStep: number | undefined;
}
const Nav = ({ currentStep }: Props) => {
  return (
    <>
      <div className="nav">
        <div className="nav__container">
          <label
            className={`step ${currentStep === 1 ? "selected" : ""}`}
            htmlFor="step1"
          >
            1
          </label>
          <span className="nav__container-text">
            <label htmlFor="step1" className="nav__container-step">
              STEP 1
            </label>
            <label htmlFor="step1" className="nav__container-info">
              YOUR INFO
            </label>
          </span>
          <input
            className="step__radio"
            type="radio"
            value={1}
            name="step"
            id="step1"
          />
        </div>

        <div className="nav__container">
          <label
            className={`step ${currentStep === 2 ? "selected" : ""}`}
            htmlFor="step2"
          >
            2
          </label>
          <span className="nav__container-text">
            <label htmlFor="step2" className="nav__container-step">
              STEP 2
            </label>
            <label htmlFor="step2" className="nav__container-info">
              SELECT PLAN
            </label>
          </span>
          <input
            className="step__radio"
            type="radio"
            name="step"
            value={2}
            id="step2"
          />
        </div>

        <div className="nav__container">
          <label
            className={`step ${currentStep === 3 ? "selected" : ""}`}
            htmlFor="step3"
          >
            3
          </label>
          <span className="nav__container-text">
            <label htmlFor="step3" className="nav__container-step">
              STEP 3
            </label>
            <label htmlFor="step3" className="nav__container-info">
              ADD-ONS
            </label>
          </span>
          <input
            className="step__radio"
            type="radio"
            name="step"
            value={3}
            id="step3"
          />
        </div>

        <div className="nav__container">
          <label
            className={`step ${currentStep === 4 ? "selected" : ""}`}
            htmlFor="step4"
          >
            4
          </label>
          <span className="nav__container-text">
            <label htmlFor="step4" className="nav__container-step">
              STEP 4
            </label>
            <label htmlFor="step4" className="nav__container-info">
              SUMMARY
            </label>
          </span>
          <input
            className="step__radio"
            type="radio"
            name="step"
            value={4}
            id="step4"
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
