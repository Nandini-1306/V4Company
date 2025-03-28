import React from "react";
import "./ServicePanelGrid.css";
const ServicePanelGrid = ({ subServices }) => {
  return (
    <div className="service-panel-grid">
      {subServices && subServices.map(sub => (
        <div key={sub.id} id={sub.id} className="sub-service">
          <h2>{sub.name}</h2>
          <ul>
            {sub.services.map((service, index) => (
              <li key={`${sub.id}-service-${index}`}>{service}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServicePanelGrid;