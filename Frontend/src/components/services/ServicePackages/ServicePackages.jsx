import React from "react";
import "./ServicePackages.css";

const ServicePackages = ({ subService, onAddToCart }) => {
  if (!subService || !subService.packages) {
    return <div>No packages available</div>;
  }

  return (
    <div className="service-packages">
      <h2>{subService.name}</h2>
      {subService.rating && (
        <div className="rating">
          <span className="rating-star">★</span>
          <span className="rating-value">{subService.rating}</span>
          <span className="rating-count">({subService.reviews.toLocaleString()} reviews)</span>
        </div>
      )}

      <div className="packages-list">
        {subService.packages.map((pkg) => (
          <div key={pkg.id} className="package-item">
            <div className="package-info">
              <h3>{pkg.name}</h3>
              <div className="rating-info">
                {subService.rating && (
                  <>
                    <span className="rating-star">★</span>
                    <span className="rating-value">{subService.rating}</span>
                    <span className="rating-divider">•</span>
                  </>
                )}
                <span>{pkg.duration}</span>
              </div>
              <div className="price-info">
                <span className="price">₹{pkg.price}</span>
                {pkg.originalPrice && (
                  <span className="original-price">₹{pkg.originalPrice}</span>
                )}
              </div>
              <p className="package-description">{pkg.description}</p>

              {/* Show bullet points for additional information */}
              {pkg.additionalFeatures && pkg.additionalFeatures.length > 0 && (
                <ul className="features-list">
                  {pkg.additionalFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}

              <button className="view-details-btn">View details</button>
            </div>
            <div className="package-visual">
              <div className="bathroom-count">
                {pkg.bathrooms ? (
                  <>
                    <span className="count">{pkg.bathrooms}</span>
                    <span className="label">BATHROOMS</span>
                  </>
                ) : pkg.seatingCapacity ? (
                  <>
                    <span className="count">{pkg.seatingCapacity.charAt(0)}</span>
                    <span className="label">SEATER</span>
                  </>
                ) : pkg.area ? (
                  <>
                    <span className="count">{parseInt(pkg.area)}</span>
                    <span className="label">SQ FT</span>
                  </>
                ) : pkg.weight ? (
                  <>
                    <span className="count">{parseInt(pkg.weight)}</span>
                    <span className="label">KG</span>
                  </>
                ) : null}
              </div>
              <button
                className="add-btn"
                onClick={() => onAddToCart(pkg)}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePackages;