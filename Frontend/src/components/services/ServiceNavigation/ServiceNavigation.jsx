import React, { useState, useEffect } from "react";
import "./ServiceNavigation.css";

const ServiceNavigation = ({ subServices }) => {
  const [activeService, setActiveService] = useState(subServices[0]?.id);

  // Function to check which section is currently visible in the viewport
  const updateActiveServiceOnScroll = () => {
    const sectionElements = subServices.map(sub => document.getElementById(sub.id));

    // Find the section that's closest to the top of the viewport
    const visibleSection = sectionElements.reduce((closest, current) => {
      if (!current) return closest;

      const rect = current.getBoundingClientRect();
      // Consider the section visible if it's within the top third of the viewport
      const isVisible = rect.top <= 200 && rect.bottom >= 0;

      if (!isVisible) return closest;

      if (!closest) return current;

      const closestRect = closest.getBoundingClientRect();
      // Return the section that's closest to the top
      return rect.top > closestRect.top ? closest : current;
    }, null);

    if (visibleSection) {
      setActiveService(visibleSection.id);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', updateActiveServiceOnScroll);

    // Call once to initialize
    updateActiveServiceOnScroll();

    // Clean up when component unmounts
    return () => {
      window.removeEventListener('scroll', updateActiveServiceOnScroll);
    };
  }, []);

  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId);

    // Scroll to the section with an offset from the top
    const element = document.getElementById(serviceId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="service-navigation">
      <h3>Select a service</h3>
      <div className="service-icons">
        {subServices.map(sub => (
          <button
            key={sub.id}
            className={`service-nav-button ${activeService === sub.id ? 'active' : ''}`}
            onClick={() => handleServiceClick(sub.id)}
          >
            <div className="icon-container">
              <img src={sub.icon} alt={sub.name} />
            </div>
            <p>{sub.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceNavigation;