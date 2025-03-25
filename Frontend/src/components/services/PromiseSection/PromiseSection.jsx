import React from "react";
import { FaCheck } from "react-icons/fa";
import "./PromiseSection.css";

const PromiseSection = () => {
  return (
    <div className="promise-section">
      <h2>v4 Promise</h2>
      
      <div className="promise-items">
        <div className="promise-item">
          <FaCheck className="promise-item-icon" />
          <span className="promise-item-text">Verified Professionals</span>
        </div>
        
        <div className="promise-item">
          <FaCheck className="promise-item-icon" />
          <span className="promise-item-text">Safe Chemicals</span>
        </div>
        
        <div className="promise-item">
          <FaCheck className="promise-item-icon" />
          <span className="promise-item-text">Superior Stain Removal</span>
        </div>
      </div>
      
      <div className="promise-seal">
        <img src="../../../../public/assets/images/quality-seal.png" alt="Quality Seal" />
      </div>
    </div>
  );
};

export default PromiseSection;