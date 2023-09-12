import React from "react";
import "./SideNavbar.css";

type SideNavbarProps = {
  currentStepIndex: number;
};

const SideNavbar: React.FC<SideNavbarProps> = ({ currentStepIndex }) => {
  return (
    <nav className="side-navbar">
      <ul>
        {Array.from({ length: 4 }, (_, index) => (
          <li
            key={index}
            className={`step ${currentStepIndex === index ? "active" : ""}`}
          >
            <span className="step-number">{index + 1}</span>
            {`Step ${index + 1}`}
            <br />
            {index === 0 && "Your info"}
            {index === 1 && "Select plan"}
            {index === 2 && "Add-ons"}
            {index === 3 && "Summary"}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavbar;
