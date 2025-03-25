import { Link } from "react-router-dom";
import "./ServiceModal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="modal-overlay">
      <div className="service-modal">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>
            <IoIosCloseCircleOutline />
          </button>
          <h2>{service.name}</h2>
          <div className="sub-services-grid">
            {service.subServices.map((sub) => (
              <Link
                key={sub.id}
                to={`/services/${sub.id}`}
                className="sub-service-card"
                onClick={onClose}
              >
                <img src={sub.icon} alt={sub.name} />
                <p>{sub.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;