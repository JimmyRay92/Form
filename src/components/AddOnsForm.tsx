import { addOn } from "../App";

type AddOnsFormProps = {
  addOns: addOn[];
  updateAddOn: (addOn: addOn) => void;
};

const AddOnsForm = ({ addOns, updateAddOn }: AddOnsFormProps) => {
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
              //   border:
              //     subscriptionPlan === plan
              //       ? "solid hsl(243, 100%, 62%) 1px"
              //       : "solid grey 1px",
              display: "flex",
              flexDirection: "column",
              paddingLeft: "1rem",
              alignItems: "flex-start",
              padding: "0.5rem",
              marginRight: "1rem",
              width: "100px",
              height: "120px",
            }}
          >
            <h2>{addOn.name}</h2>
            <p>{addOn.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default AddOnsForm;
