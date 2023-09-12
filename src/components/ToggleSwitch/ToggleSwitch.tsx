import { useEffect, useState } from "react";
import "./ToggleSwitch.css";

interface Props {
  // onSelectBilling: (billing: string) => void;
  billingCycle: string | undefined;
  setBillingCycle: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ToggleSwitch = ({ billingCycle, setBillingCycle }: Props) => {
  const [checked, setChecked] = useState<boolean>(false);
  const billing = !checked ? "monthly" : "yearly";

  useEffect(() => {
    setBillingCycle(billing);
  }, [checked]);

  //ensures that toggleSwitch maintains its state when you
  //navigate the steps
  useEffect(() => {
    if (billingCycle === "yearly") setChecked(true);
    else setChecked(false);
  }, []);

  return (
    <div className="toggle__switch">
      <label
        htmlFor="billing"
        className={`${
          billingCycle === "monthly" ? "step__heading" : "step__info"
        }`}
      >
        Monthly
      </label>
      <input
        id="billing"
        type="checkbox"
        className="toggle__checkbox"
        value={billingCycle}
        onChange={() => {
          setChecked(!checked);
        }}
      />
      <a onClick={() => setChecked(!checked)} className="toggle__container">
        <span
          className={`toggle__slider ${checked ? "toggle__checked" : ""}`}
        ></span>
      </a>
      <label
        htmlFor="billing"
        className={`${
          billingCycle === "yearly" ? "step__heading" : "step__info"
        }`}
      >
        Yearly
      </label>
    </div>
  );
};

export default ToggleSwitch;
