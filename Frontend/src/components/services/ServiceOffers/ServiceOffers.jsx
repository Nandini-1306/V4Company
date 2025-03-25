import React from "react";
import { FaCheckCircle, FaChevronDown } from "react-icons/fa";
import "./ServiceOffers.css";

const ServiceOffers = () => {
  return (
    <div className="offers">
      <div className="offers-icon">
        <div className="icon-circle">
          <FaCheckCircle />
        </div>
      </div>

      <div className="offers-content">
        <h2>Save 10% on every order</h2>
        <p>Get Plus now</p>

        <div className="view-more">
          <span>View More Offers</span>
          <FaChevronDown className="more-icon" />
        </div>
      </div>
    </div>
  );
};

export default ServiceOffers;