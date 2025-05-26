import React from "react";
import { FaCheckCircle, FaChevronDown } from "react-icons/fa";
import "./ServiceOffers.css";

const ServiceOffers = ({ offers = [] }) => {
  const defaultOffer = {
    title: "Save 10% on every order",
    description: "Get Plus now"
  };

  const displayOffers = offers.length > 0 ? offers : [defaultOffer];

  return (
    <div className="offers">
      <div className="offers-content">
        <div className="offer-header">
          <div className="offer-icon">
            <FaCheckCircle />
          </div>
          <div>
            <h3>{displayOffers[0].title}</h3>
            <p>{displayOffers[0].description}</p>
          </div>
        </div>

        {displayOffers.length > 1 && (
          <div className="view-more">
            <span>View More Offers</span>
            <FaChevronDown className="more-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceOffers;