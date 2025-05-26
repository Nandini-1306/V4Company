import React, { useState } from "react";
import { useParams } from "react-router-dom";
import services from "../../Data/services"; 
import ServiceNavigation from "../../components/services/ServiceNavigation/ServiceNavigation";
import ServicePackages from "../../components/services/ServicePackages/ServicePackages";
import ServiceCart from "../../components/services/ServiceCart/ServiceCart";
import ServiceOffers from "../../components/services/ServiceOffers/ServiceOffers";
import PromiseSection from "../../components/services/PromiseSection/PromiseSection";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [cart, setCart] = useState([]);

  // Find the main service
  let service = services.find(
    (s) => s.id === parseInt(serviceId) || s.path.includes(serviceId)
  );

  if (!service) {
    // If direct service not found, check for sub-service
    for (const mainService of services) {
      const foundSubService = mainService.subServices.find(
        (sub) => sub.id === serviceId
      );
      if (foundSubService) {
        service = mainService;
        break;
      }
    }
  }

  if (!service) return <h2>Service Not Found</h2>;

  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(cart.filter((item) => item.id !== itemId));
    } else {
      setCart(
        cart.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const calculateSavings = () => {
    return cart.reduce((total, item) => {
      return total + (item.originalPrice - item.price) * item.quantity;
    }, 0);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <div className="service-detail">
      <h1>{service.name} Services</h1>
      <div className="service-rating">
        {service.subServices[0]?.rating && (
          <>
            <span className="rating-star">★</span>
            <span className="rating-value">
              {service.subServices[0].rating}
            </span>
            <span className="rating-count">
              ({service.subServices[0].reviews.toLocaleString()} reviews)
            </span>
          </>
        )}
      </div>

      <div className="service-layout">
        <div className="service-navigation-container">
          <ServiceNavigation subServices={service.subServices} />
        </div>

        <div className="main-content">
          {service.subServices.map((subService) => (
            <div
              id={subService.id}
              key={subService.id}
              className="subservice-container"
            >
              <ServicePackages
                subService={subService}
                onAddToCart={handleAddToCart}
              />
            </div>
          ))}
          <div className="services-included">
            <h2>Services Included</h2>
            <div className="services-grid">
              {service.subServices.flatMap((subService) =>
                subService.detailedServices
                  ? subService.detailedServices.map((service, index) => (
                      <div
                        key={`${subService.id}-service-${index}`}
                        className="service-card"
                      >
                        <div className="service-image">
                          <img src={service.image} alt={service.name} />
                        </div>
                        <h4>{service.name}</h4>
                        <p>{service.description}</p>
                        {/* Add button for individual services */}
                        <button
                          className="add-btn"
                          onClick={() =>
                            handleAddToCart({
                              id: `${subService.id}-${service.name
                                .toLowerCase()
                                .replace(/\s/g, "-")}`,
                              name: service.name,
                              price: 299, // You'll need to add pricing for individual services in your data
                              originalPrice: 349,
                              duration: "1 hr",
                              description: service.description,
                            })
                          }
                        >
                          Add
                        </button>
                      </div>
                    ))
                  : []
              )}
            </div>
          </div>
        </div>

        <div className="sidebar">
          <ServiceCart
            cartItems={cart}
            onUpdateQuantity={handleUpdateQuantity}
            total={calculateTotal()}
            savings={calculateSavings()}
          />
          <ServiceOffers offers={service.offers} />
          <PromiseSection benefits={service.benefits} />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
