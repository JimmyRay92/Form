import React, { useState } from "react";
import "./SubscriptionForm.css";

export type BillingType = "monthly" | "annual";
export type SubscriptionPlan = "arcade" | "advanced" | "pro";

type SubscriptionData = {
  billingType: BillingType;
  subscriptionPlan: SubscriptionPlan;
};

type SubscriptionFormProps = SubscriptionData & {
  updateFields: (fields: Partial<SubscriptionData>) => void;
};

type planObject = {
  plan: SubscriptionPlan;
  monthlyPrice: string;
  annualPrice: string;
};
const subscriptionPlanData: planObject[] = [
  { plan: "arcade", monthlyPrice: "9", annualPrice: "90" },
  { plan: "advanced", monthlyPrice: "12", annualPrice: "120" },
  { plan: "pro", monthlyPrice: "15", annualPrice: "150" },
];

function SubscriptionForm({
  billingType = "monthly",
  subscriptionPlan = "arcade",
  updateFields,
}: SubscriptionFormProps) {
  return (
    <div>
      <h2>Select a Plan:</h2>
      <p>You have the option of monthly or yearly billing</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingBottom: "10px",
          justifyContent: "space-between",
        }}
      >
        {subscriptionPlanData.map(({ plan, monthlyPrice, annualPrice }) => {
          return (
            <div
              key={plan}
              style={{
                borderRadius: "10px",
                border:
                  subscriptionPlan === plan
                    ? "solid hsl(243, 100%, 62%) 1px"
                    : "solid grey 1px",
                display: "flex",
                flexDirection: "column",
                paddingLeft: "1rem",
                alignItems: "flex-start",
                padding: "0.5rem",
                marginRight: "1rem",
                width: "100px",
                height: "120px",
              }}
              onClick={() => {
                updateFields({
                  subscriptionPlan: plan,
                });
              }}
            >
              {plan} <br />
              {billingType === "annual"
                ? `${annualPrice}/yr`
                : `${monthlyPrice}/mo`}
              {billingType === "annual" && (
                <p style={{ padding: "0" }}>2 months free</p>
              )}
            </div>
          );
        })}
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
