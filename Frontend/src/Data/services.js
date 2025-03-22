const services = [
  {
    id: 1,
    name: "Home-Maid",
    img: "/assets/images/maid.png",
    path: "/services/maid",
    subServices: [
      {
        id: "bathroom-kitchen",
        name: "Bathroom & Kitchen Cleaning",
        icon: "/assets/images/bathroom-kitchen-icon.png",
        services: ["Utensil Cleaning", "CounterTop Cleaning", "Fridge Cleaning", "Toilet Cleaning"]
      },
      {
        id: "sofa-carpet",
        name: "Sofa & Carpet Cleaning",
        icon: "/assets/images/sofa-carpet-icon.png",
        services: ["Sofa & Cushion Cleaning", "Carpet Cleaning", "Chair Cleaning"]
      },
      {
          id: "laundry-iron",
          name: "Laundry & Ironing",
          icon: "/assets/images/laundry-iron-icon.png",
          services: ["Washing Clothes", "Washing and Ironing", "DryCleaning"]
      }
    ],
  },
  {
    id: 2,
    name: "Gardener",
    img: "/assets/images/gardener.png",
    path: "/services/gardener",
    subServices: [
      {
        id: "lawn-care",
        name: "Lawn Care",
        icon: "/assets/images/lawn-care-icon.png",
        services: ["Grass Cutting", "Weeding", "Fertilization"]
      },
      {
        id: "plant-maintenance",
        name: "Plant Maintenance",
        icon: "/assets/images/plant-maintenance-icon.png",
        services: ["Watering", "Pruning", "Pest Control"]
      }
    ],
  },
  {
    id: 3,
    name: "Chef",
    img: "/assets/images/chef.png",
    path: "/services/chef",
    subServices: [
      {
        id: "meal-preparation",
        name: "Meal Preparation",
        icon: "/assets/images/meal-preparation-icon.png",
        services: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        id: "specialty-cuisine",
        name: "Specialty Cuisine",
        icon: "/assets/images/specialty-cuisine-icon.png",
        services: ["Indian", "Italian", "Chinese"]
      }
    ],
  },
  {
    id: 4,
    name: "Care Taker",
    img: "/assets/images/care_taker.png",
    path: "/services/care_taker",
    subServices: [
      {
        id: "elderly-care",
        name: "Elderly Care",
        icon: "/assets/images/elderly-care-icon.png",
        services: ["Medication Reminder", "Bathing Assistance", "Meal Preparation"]
      },
      {
        id: "child-care",
        name: "Child Care",
        icon: "/assets/images/child-care-icon.png",
        services: ["Feeding", "Diaper Changing", "Playtime Supervision"]
      }
    ],
  },
  {
    id: 5,
    name: "Car Washer",
    img: "/assets/images/car_wash.png",
    path: "/services/car_wash",
    subServices: [
      {
        id: "exterior-cleaning",
        name: "Exterior Cleaning",
        icon: "/assets/images/exterior-cleaning-icon.png",
        services: ["Car Wash", "Waxing", "Scratch Removal"]
      },
      {
        id: "interior-cleaning",
        name: "Interior Cleaning",
        icon: "/assets/images/interior-cleaning-icon.png",
        services: ["Vacuuming", "Dashboard Cleaning", "Leather Polishing"]
      }
    ],
  },
  {
    id: 6,
    name: "Home Tutor",
    img: "/assets/images/tutor.png",
    path: "/services/home_tutor",
    subServices: [
      {
        id: "school-tutoring",
        name: "School Tutoring",
        icon: "/assets/images/school-tutoring-icon.png",
        services: ["Mathematics", "Science", "English", "History"]
      },
      {
        id: "competitive-exam",
        name: "Competitive Exam Coaching",
        icon: "/assets/images/competitive-exam-icon.png",
        services: ["JEE", "NEET", "UPSC", "CAT"]
      }
    ],
  }
];
export default services;