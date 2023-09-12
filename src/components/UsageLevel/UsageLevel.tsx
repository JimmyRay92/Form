import { usageMonthly } from "../../data/UsageMonthly";
import { usageYearly } from "../../data/usageYearly";
import "./UsageLevel.css";

export interface Usage {
  id: string;
  heading: string;
  pricing: number;
  img: {
    src: string;
    alt: string;
  };
  free: string;
}

interface Props {
  billingCycle: string | undefined;
  selectedUsage: Usage | undefined;
  setSelectedUsage: React.Dispatch<React.SetStateAction<Usage | undefined>>;
}

const UsageLevel = ({
  billingCycle,

  selectedUsage,
  setSelectedUsage,
}: Props) => {
  return (
    <>
      <div className="usage__all">
        {(billingCycle === "monthly" ? usageMonthly : usageYearly).map(
          (usage) => (
            <div
              key={usage.id}
              onClick={() => {
                setSelectedUsage(usage);
              }}
              className={`usage
                ${selectedUsage?.id === usage.id ? "usage--selected" : ""}
                `}
            >
              <img
                src={usage.img.src}
                alt={usage.img.alt}
                className="usage__image"
              />
              <div className="usage__container">
                <div className=" usage__heading">{usage.heading}</div>
                <div className="usage__info">
                  ${usage.pricing}/{billingCycle === "monthly" ? "mo" : "yr"}
                </div>
                {billingCycle === "yearly" && (
                  <div className="step__heading">{usage.free}</div>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default UsageLevel;
