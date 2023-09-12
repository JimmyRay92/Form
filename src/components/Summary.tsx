import { SetStateAction } from "react";
import { addOn } from "../App";
import { BillingType, SubscriptionPlan } from "./SubscriptionForm";

// const subscriptionPrice = [
//   { name: "arcade", monthlyPrice: "9", yearlyPrice: "90" },
//   { name: "advacned", monthlyPrice: "12", yearlyPrice: "120" },
//   { name: "pro", monthlyPrice: "15", yearlyPrice: "150" },
// ];

const findSubscriptionPrice = (
  subscriptionPlan: SubscriptionPlan,
  billingType: BillingType
) => {
  if (subscriptionPlan === "arcade" && billingType === "monthly") {
    return "9";
  }
  if (subscriptionPlan === "advanced" && billingType === "monthly") {
    return "12";
  }
  if (subscriptionPlan === "pro" && billingType === "monthly") {
    return "15";
  }
  if (subscriptionPlan === "arcade" && billingType === "annual") {
    return "90";
  }
  if (subscriptionPlan === "advanced" && billingType === "annual") {
    return "120";
  }
  if (subscriptionPlan === "pro" && billingType === "annual") {
    return "150";
  } else {
    return "";
  }
};

const findAddOnPrice = (addOn: addOn, billingType: BillingType) => {
  if (!addOn.addedOn) return;
  if (addOn.name === "online service" && billingType === "monthly") {
    return "1";
  }
  if (addOn.name === "online service" && billingType === "annual") {
    return "10";
  }
  if (addOn.name === "larger storage" && billingType === "monthly") {
    return "2";
  }
  if (addOn.name === "larger storage" && billingType === "annual") {
    return "20";
  }
  if (addOn.name === "customizable profile" && billingType === "monthly") {
    return "2";
  }
  if (addOn.name === "customizable profile" && billingType === "annual") {
    return "20";
  } else {
    return "";
  }
};

const annualPrice = (monthPrice: string) => {
  const intPrice = parseInt(monthPrice);
  return intPrice * 12 - intPrice * 2;
};

type SummaryProps = {
  subscriptionPlan: SubscriptionPlan;
  billingType: BillingType;
  addOns: addOn[];
  editPlan: (index: SetStateAction<number>) => void;
};

// i need a summary of the data that was entered in the previous steps
// i need to display the data in a readable format
// i need to display the total price of the subscription
// i need to display the total price of the add ons
// i need to display the total price of the subscription and add ons
const Summary = ({
  subscriptionPlan,
  billingType,
  addOns,
  editPlan,
}: SummaryProps) => {
  const selectedAddedOns = addOns.filter((addOn) => addOn.addedOn);

  // TODO: check this function
  // Function to calculate the total price
  const calculateTotalPrice = (
    subscriptionPlan: SubscriptionPlan,
    billingType: BillingType,
    selectedAddOns: addOn[]
  ) => {
    // Get the base subscription price
    const subscriptionPrice = parseFloat(
      findSubscriptionPrice(subscriptionPlan, billingType)
    );

    // Calculate the total add-on price
    const addOnTotalPrice = selectedAddOns.reduce((total, addOn) => {
      const addOnPrice = parseFloat(
        billingType === "monthly" ? addOn.monthlyPrice : addOn.yearlyPrice
      );
      return total + addOnPrice;
    }, 0);

    // Calculate the total price by adding the subscription price and add-on price
    const total = subscriptionPrice + addOnTotalPrice;

    return total;
  };

  const totalPrice = calculateTotalPrice(
    subscriptionPlan,
    billingType,
    selectedAddedOns
  );

  return (
    <>
      <div>
        <h2>
          {subscriptionPlan} {billingType}
        </h2>
        <p>{findSubscriptionPrice(subscriptionPlan, billingType)}</p>
        <button>Change</button>
        {addOns.map((addOn) => {
          return (
            addOn.addedOn && (
              <div key={addOn.name}>
                <h2>{addOn.name}</h2>
                <p>{addOn.description}</p>
                <p>{addOn.addedOn ? "added" : "not added"}</p>
                <button>Change</button>
              </div>
            )
          );
        })}
      </div>
      <div>
        <h2>Total per {billingType === "annual" ? "year" : "month"}</h2>
        <p>{totalPrice}</p>
      </div>
    </>
  );
};

export default Summary;
