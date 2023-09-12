import { AddOn } from "../AddOns/AddOns";
import "./Summary.css";
import { Usage } from "../UsageLevel/UsageLevel";
import { FormEvent, useEffect, useState } from "react";
import ThankYou from "../ThankYou";

interface Props {
  selectedUsage: Usage | undefined;
  billingCycle: string | undefined;
  addOns: AddOn[] | undefined;
  onThankYou: (thankYou: boolean) => void;
}

const Summary = ({
  billingCycle,
  addOns,
  selectedUsage,
  onThankYou,
}: Props) => {
  const [thankYou, setThankYou] = useState<boolean>(false);

  const totalPriceOfAddOns =
    addOns && addOns.reduce((total, addOn) => total + addOn.pricing, 0);

  const totalPrice =
    totalPriceOfAddOns && selectedUsage?.pricing
      ? totalPriceOfAddOns + selectedUsage.pricing
      : "";

  const billingCycleCheck = billingCycle === "monthly" ? "mo" : "yr";

  useEffect(() => {
    if (thankYou) onThankYou(thankYou);
  }, [thankYou]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (selectedUsage && totalPrice) setThankYou(true);
  };

  return (
    <>
      {!thankYou && (
        <form onSubmit={handleSubmit}>
          <div className="summary">
            <h2 className="step__heading">Finishing up</h2>
            <p className="step__info">
              Double-check everything looks OK before confirming.
            </p>
            <div className="summary__detail">
              <div className="summary__plan">
                <span>
                  <div className="step__heading summary__plan-heading">
                    {selectedUsage?.heading} ({billingCycle})
                  </div>
                  <a className="step__info">Change</a>
                </span>
                <span className="step__heading">
                  ${selectedUsage?.pricing}/{billingCycleCheck}
                </span>
              </div>
              <div>
                {addOns &&
                  addOns.map((addOn) => (
                    <div key={addOn.id} className="summary__addon">
                      <span className="step__info">{addOn.heading}</span>
                      <span className="step__heading">
                        +${addOn.pricing}/{billingCycleCheck}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="summary__total">
              <span className="step__info ">
                Total (per {billingCycle === "monthly" ? "month" : "year"})
              </span>
              <span className="summary__total-price">
                +${totalPrice}/{billingCycleCheck}
              </span>
            </div>

            <button className="btn__summary">Confirm</button>
          </div>
        </form>
      )}
      {thankYou && <ThankYou />}
    </>
  );
};

export default Summary;
