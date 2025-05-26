import React from "react";
import { FaCheck } from "react-icons/fa";
import "./PromiseSection.css";

const PromiseSection = ({ benefits = [] }) => {
  const defaultBenefits = [
    "Verified Professionals",
    "Safe Chemicals",
    "Superior Stain Removal"
  ];

  const displayBenefits = benefits.length > 0 ? benefits : defaultBenefits;

  return (
    <div className="promise-section">
      <h3>V4 Promise</h3>
      <ul className="promise-list">
        {displayBenefits.map((benefit, index) => (
          <li key={index} className="promise-item">
            <span className="check-icon">
              <FaCheck />
            </span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <div className="trust-badge">
        <img src="/assets/images/trust-badge.png" alt="Trusted Service" />
      </div>
    </div>
  );
};

export default PromiseSection;