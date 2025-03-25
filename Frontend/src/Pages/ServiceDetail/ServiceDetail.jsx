import React from "react";
import { useParams } from "react-router-dom";
import services from "../../data/services";
import ServiceNavigation from "../../components/services/ServiceNavigation/ServiceNavigation";
import ServicePanelGrid from "../../components/services/ServicePanelGrid/ServicePanelGrid";
import ServiceCart from "../../components/services/ServiceCart/ServiceCart";
import ServiceOffers from "../../components/services/ServiceOffers/ServiceOffers";
import PromiseSection from "../../components/services/PromiseSection/PromiseSection";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  let service = services.find(s => s.id === parseInt(serviceId) || s.path.includes(serviceId));
  let subService = null;
  if (!service) {
    for (const mainService of services) {
      const foundSubService = mainService.subServices.find(sub => sub.id === serviceId);
      if (foundSubService) {
        service = mainService;
        subService = foundSubService;
        break;
      }
    }
  }

  if (!service) return <h2>Service Not Found</h2>;

  return (
    <div className="service-detail">
      <h1>{service.name} Services</h1>
      <ServiceNavigation subServices={service.subServices} />
      <div className="content">
        <ServicePanelGrid subServices={service.subServices} />
        <aside className="sidebar">
          <ServiceCart />
          <ServiceOffers />
          <PromiseSection />
        </aside>
      </div>
    </div>
  );
};

export default ServiceDetail;