import React from "react";
import "./ServiceNavigation.css";

const ServiceNavigation = ({ subServices }) => {
  return (
    <div className="service-navigation">
      <div className="service-icons">
        {subServices.map(sub => (
          <button
            key={sub.id}
            className="service-nav-button"
            onClick={() => document.getElementById(sub.id).scrollIntoView()}
          >
            <div className="icon-container">
              <img src={sub.icon} alt={sub.name} />
            </div>
            <p>{sub.name}</p>
          </button>
        ))}
      </div>

      <div className="service-details">
        {/* This is where your service detail panels would go */}
        {/* Each panel should have an id matching the sub.id from above */}
      </div>
    </div>
  );
};

export default ServiceNavigation;