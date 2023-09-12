import { FormEvent } from "react";
import { addOnsMonthly } from "../../data/AddOnsMonthly";
import { addOnsYearly } from "../../data/AddOnsYearly";
import "./AddOns.css";

export interface AddOn {
  id: string;
  heading: string;
  pricing: number;
}

interface Props {
  billingCycle: string | undefined;
  addOnsFromMain: AddOn[] | undefined;
  onValid: (onValid: boolean) => void;
  selectedAddOns: AddOn[] | undefined;
  setSelectedAddOns: React.Dispatch<React.SetStateAction<AddOn[] | undefined>>;
}

const AddOns = ({
  billingCycle,
  onValid,
  selectedAddOns,
  setSelectedAddOns,
}: Props) => {
  const handleCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    addon: AddOn
  ) => {
    if (e.target.checked) {
      setSelectedAddOns([...(selectedAddOns || []), addon]);
    } else {
      setSelectedAddOns((all) => all?.filter((item) => item.id !== addon.id));
    }
  };

  const handleSubmit = (event: FormEvent) => {
    {
      selectedAddOns ? onValid(true) : onValid(false);
    }
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="step__heading">Pick add-ons</h2>

        <p className="step__info">
          Add-ons help enhance your gaming experience.
        </p>

        {(billingCycle === "monthly" ? addOnsMonthly : addOnsYearly).map(
          (addon) => (
            <label
              htmlFor={addon.id}
              className={`addon ${
                selectedAddOns?.some((item) => item.id === addon.id)
                  ? "addon--selected"
                  : ""
              } `}
              key={addon.id}
            >
              <input
                className="addon__checkbox"
                type="checkbox"
                id={addon.id}
                checked={
                  selectedAddOns
                    ? selectedAddOns?.some((item) => item.id === addon.id)
                    : false
                }
                onChange={(e) => handleCheck(e, addon)}
              />
              <div className="addon__container">
                <div className="step__heading addon__heading">
                  {addon.heading}
                </div>
                <div className="step__info addon__info">{addon.info}</div>
              </div>
              <span className="step__heading">
                +${addon.pricing}/{billingCycle === "monthly" ? "mo" : "yr"}
              </span>
            </label>
          )
        )}

        <button className="btn__next">Next Step</button>
      </form>
    </>
  );
};

export default AddOns;
