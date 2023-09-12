import { addOn } from "../App";
import { BillingType } from "./SubscriptionForm";

type AddOnsFormProps = {
  addOns: addOn[];
  updateAddOn: (addOn: addOn) => void;
  billingType: BillingType;
};

function displayMonthlyPrice(addOn: addOn, billingType: BillingType) {
  if (billingType === "monthly" && addOn.name === "online service") {
    return "+$1/mo";
  } else if (billingType === "monthly") {
    return "+$2/mo";
  } else if (billingType === "annual" && addOn.name === "online service") {
    return "+$10/yr";
  } else if (billingType === "annual") {
    return "+20/yr";
  } else {
    return "";
  }
}

const AddOnsForm = ({ addOns, updateAddOn, billingType }: AddOnsFormProps) => {
  console.log(addOns);
  return (
    <>
      <h2>Pick add ons</h2>
      <p>Add-ons help enhance your gaming experience</p>
      {addOns.map((addOn) => {
        return (
          <div
            onClick={() => updateAddOn(addOn)}
            key={addOn.name}
            style={{
              borderRadius: "10px",
              border: addOn.addedOn
                ? "solid hsl(243, 100%, 62%) 1px"
                : "solid hsl(229, 24%, 87%) 1px",
              display: "flex",
              paddingLeft: "1rem",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.5rem",
              marginRight: "1rem",
              width: "300px",
              height: "100px",
            }}
          >
            <div>
              <h2 style={{ margin: 0 }}>{addOn.name}</h2>
              <p>{addOn.description}</p>
            </div>
            {displayMonthlyPrice(addOn, billingType)}
          </div>
        );
      })}
    </>
  );
};

export default AddOnsForm;
