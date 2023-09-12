import React, { useState } from "react";
import "./SubscriptionForm.css";

export type BillingType = "monthly" | "annual";
export type SubscriptionPlan = "arcade" | "advanced" | "pro";

// type UserData = {
//     name: string;
//     email: string;
//     phoneNumber: string;
//   };

//   type UserFormProps = UserData & {
//     updateFields: (fields: Partial<UserData>) => void;
//   };

type SubscriptionData = {
  billingType: BillingType;
  subscriptionPlan: SubscriptionPlan;
};

type SubscriptionFormProps = SubscriptionData & {
  updateFields: (fields: Partial<SubscriptionData>) => void;
};

function SubscriptionForm({
  billingType = "monthly",
  subscriptionPlan = "arcade",
  updateFields,
}: SubscriptionFormProps) {
  const [totalCost, setTotalCost] = useState<number>(10); // Default monthly cost for Arcade

  //   const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setBillingType(e.target.value as BillingType);
  //   };

  //   const handlePlanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setSubscriptionPlan(e.target.value as SubscriptionPlan);
  //   };

  console.log("subscriptionPlan", subscriptionPlan);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let price = 0;

    if (billingType === "monthly") {
      if (subscriptionPlan === "arcade") {
        price = 10;
      } else if (subscriptionPlan === "advanced") {
        price = 20;
      } else if (subscriptionPlan === "pro") {
        price = 30;
      }
    } else if (billingType === "annual") {
      if (subscriptionPlan === "arcade") {
        price = 100; // Annual price, 10 * 12
      } else if (subscriptionPlan === "advanced") {
        price = 200; // Annual price, 20 * 12
      } else if (subscriptionPlan === "pro") {
        price = 300; // Annual price, 30 * 12
      }
    }

    setTotalCost(price);
  };

  return (
    <div>
      <h2>Select a Plan:</h2>
      <p>You have the option of monthly or yearly billing</p>
      {/* add onclick event on div instead 
        change the selected plan */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingBottom: "10px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            borderRadius: "10px",
            border: "solid grey 1px",
            display: "flex",
            flexDirection: "column",
            padding: "0.5rem",
            marginRight: "1rem",
            alignItems: "flex-start",
            width: "100px",
            height: "120px",
          }}
          className={subscriptionPlan === "arcade" ? "selectedPlan" : ""}
        >
          <img
            src="../assets/images/icon-arcade.svg"
            alt="arcade"
            style={{ marginBottom: "40px" }}
          />
          <label>
            <input
              type="radio"
              name="subscription-plan"
              value="arcade"
              checked={subscriptionPlan === "arcade"}
              onChange={(e) =>
                updateFields({
                  subscriptionPlan: e.target.value as SubscriptionPlan,
                })
              }
              style={{ appearance: "none", margin: "0" }}
            />
            Arcade
          </label>
          ${totalCost}/{billingType === "annual" ? "yr" : "mo"}
          {billingType === "annual" && (
            <p style={{ padding: "0" }}>2 months free</p>
          )}
        </div>
        <div
          style={{
            borderRadius: "10px",
            border: "solid grey 1px",
            display: "flex",
            flexDirection: "column",
            padding: "0.5rem",
            marginRight: "1rem",
            alignItems: "flex-start",
            width: "100px",
            height: "120px",
          }}
        >
          <img
            src="../assets/images/icon-advanced.svg"
            alt="advanced"
            style={{ marginBottom: "40px" }}
          />
          <label>
            <input
              type="radio"
              name="subscription-plan"
              value="advanced"
              checked={subscriptionPlan === "advanced"}
              onChange={(e) =>
                updateFields({
                  subscriptionPlan: e.target.value as SubscriptionPlan,
                })
              }
              style={{ appearance: "none", margin: "0" }}
            />
            Advanced
          </label>
          ${totalCost}/{billingType === "annual" ? "yr" : "mo"}
          {billingType === "annual" && (
            <p style={{ padding: "0" }}>2 months free</p>
          )}
        </div>
        <div
          style={{
            borderRadius: "10px",
            border: "solid grey 1px",
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
          <label>
            <img
              src="../assets/images/icon-pro.svg"
              alt="pro"
              style={{ marginBottom: "40px" }}
            />
            <input
              type="radio"
              name="subscription-plan"
              value="pro"
              checked={subscriptionPlan === "pro"}
              onChange={(e) =>
                updateFields({
                  subscriptionPlan: e.target.value as SubscriptionPlan,
                })
              }
              style={{ appearance: "none", margin: "0" }}
            />
            Pro
          </label>
          ${totalCost}/{billingType === "annual" ? "yr" : "mo"}
          {billingType === "annual" && (
            <p style={{ padding: "0" }}>2 months free</p>
          )}
        </div>
      </div>
      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "solid grey 1px",
          borderRadius: "5px",
          height: "30px",
          backgroundColor: "hsl(231, 100%, 99%)",
        }}
      >
        <div>
          <label>
            <input
              type="radio"
              name="billing-type"
              value="monthly"
              checked={billingType === "monthly"}
              onChange={(e) =>
                updateFields({
                  billingType: e.target.value as BillingType,
                })
              }
            />
            Monthly
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="billing-type"
              value="annual"
              checked={billingType === "annual"}
              onChange={(e) =>
                updateFields({
                  billingType: e.target.value as BillingType,
                })
              }
            />
            Annual
          </label>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionForm;
