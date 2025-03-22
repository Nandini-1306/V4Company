import { useState } from "react";
import { Link } from "react-router-dom";
import "./HomeServices.css";
import ServiceModal from "../ServiceModal/ServiceModal.jsx";
import services from "../../Data/services";

const HomeServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const handleServiceClick=(serviceId)=>{
      const service=services.find(s=>s.id===serviceId);
      setSelectedService(service);
      };
  const closeModal=()=>{
      setSelectedService(null);
      };
  return (
    <div className="home-container">
      <h2 className="home-title">Essential Services, Anytime, Anywhere</h2>
      <div className="services-box">
        <h3>Your Needs, Our Services</h3>
        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => handleServiceClick(service.id)}
            >
              <img src={service.img} alt={service.name} />
              <p>{service.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Show Modal when a service is selected */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default HomeServices;
