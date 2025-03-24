import React from "react";
import { Link } from "react-router-dom";
import BathroomCleaning from "../../assets/download/bathroomCleaning.png";
import "./ClickableImage.css"; // Import the updated CSS

const ClickableImage = ({ redirectUrl = "/bathroom-cleaning" }) => {
  return (
    <div className="clickable-image-wrapper">
      <Link to={redirectUrl} aria-label="Bathroom cleaning services" className="clickable-image">
        <img
          src={BathroomCleaning}
          alt="Bathroom cleaning services with professional cleaner"
        />
      </Link>
    </div>
  );
};

export default ClickableImage;
