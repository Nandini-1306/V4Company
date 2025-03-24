import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { HomeTutor, CareTaker, CarWasher, Chef, Gardener, HomeMaid } from "../../assets/service";

const MostBookedServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Intense home cleaning",
      image: HomeMaid,
      rating: 4.78,
      reviews: "2.1M",
      price: "₹519"
    },
    {
      id: 2,
      title: "Classic garden cleaning",
      image: Gardener,
      rating: 4.83,
      reviews: "1.3M",
      price: "₹429"
    },
    {
      id: 3,
      title: "Deluxe support",
      image: CareTaker,
      rating: 4.82,
      reviews: "253K",
      price: "₹499"
    },
    {
      id: 4,
      title: "Perfect car-wash",
      image: CarWasher,
      rating: 4.85,
      reviews: "127K",
      price: "₹160"
    },
    {
      id: 5,
      title: "Party chef",
      image: Chef,
      rating: 4.75,
      reviews: "9K",
      price: "₹199"
    },
    {
      id: 6,
      title: "Quick teaching",
      image: HomeTutor,
      rating: 4.75,
      reviews: "9K",
      price: "₹199"
    }
  ];

  const visibleItems = 4; // Number of items visible at once

  const nextSlide = () => {
    if (currentIndex < services.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Most booked services</h1>

      <div className="relative">
        {/* Left Arrow */}
        <button
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-2 shadow-md ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Slider Container */}
        <div className="overflow-hidden" ref={sliderRef}>
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="min-w-[25%] px-2"
              >
                <div className="rounded-lg overflow-hidden flex flex-col h-full">
                  <div className="relative h-64 bg-gray-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col">
                    <h3 className="font-medium text-lg mb-2">{service.title}</h3>
                    <div className="flex items-center mb-1">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      <span className="ml-1 text-sm">{service.rating} ({service.reviews})</span>
                    </div>
                    <span className="text-lg font-semibold">{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-2 shadow-md ${currentIndex >= services.length - visibleItems ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'}`}
          onClick={nextSlide}
          disabled={currentIndex >= services.length - visibleItems}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default MostBookedServices;