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
        rating: 4.82,
        reviews: 1134,
        packages: [
          {
            id: "classic-2bath",
            name: "Classic cleaning (2 bathrooms)",
            price: 785,
            originalPrice: 850,
            duration: "2 hrs",
            description: "Standard cleaning for bathrooms and kitchen surfaces",
            bathrooms: 2,
          },
          {
            id: "intense-2bath",
            name: "Intense cleaning (2 bathrooms)",
            price: 950,
            originalPrice: 1030,
            duration: "2 hrs 40 mins",
            description: "Floor & tile cleaning with a scrub machine",
            bathrooms: 2,
            additionalFeatures: [
              "Scrub machine cleaning",
              "Deep stain removal",
            ],
          },
          {
            id: "classic-3bath",
            name: "Classic cleaning (3 bathrooms)",
            price: 1115,
            originalPrice: 1200,
            duration: "3 hrs",
            description: "Standard cleaning for bathrooms and kitchen surfaces",
            bathrooms: 3,
          },
          {
            id: "intense-3bath",
            name: "Intense cleaning (3 bathrooms)",
            price: 1377,
            originalPrice: 1495,
            duration: "4 hrs",
            description: "Floor & tile cleaning with a scrub machine",
            bathrooms: 3,
            additionalFeatures: [
              "Scrub machine cleaning",
              "Deep stain removal",
            ],
          },
        ],
        services: [
          "Utensil Cleaning",
          "CounterTop Cleaning",
          "Fridge Cleaning",
          "Toilet Cleaning",
        ],
        detailedServices: [
          {
            name: "Utensil Cleaning",
            description:
              "Professional cleaning of all kitchen utensils with safe cleaning agents",
            image: "/assets/images/utensil-cleaning.png",
          },
          {
            name: "CounterTop Cleaning",
            description:
              "Thorough cleaning and sanitizing of all kitchen countertops",
            image: "/assets/images/countertop-cleaning.png",
          },
          {
            name: "Fridge Cleaning",
            description:
              "Interior and exterior cleaning of refrigerator with safe products",
            image: "/assets/images/fridge-cleaning.png",
          },
          {
            name: "Toilet Cleaning",
            description:
              "Deep cleaning and disinfection of toilets, sinks, and bathroom fixtures",
            image: "/assets/images/toilet-cleaning.png",
          },
        ],
      },
      {
        id: "sofa-carpet",
        name: "Sofa & Carpet Cleaning",
        icon: "/assets/images/sofa-carpet-icon.png",
        rating: 4.75,
        reviews: 896,
        packages: [
          {
            id: "basic-sofa",
            name: "Basic Sofa Cleaning",
            price: 699,
            originalPrice: 799,
            duration: "1.5 hrs",
            description: "Vacuum and spot cleaning for sofas",
            seatingCapacity: "3-Seater",
          },
          {
            id: "premium-sofa",
            name: "Premium Sofa Cleaning",
            price: 999,
            originalPrice: 1199,
            duration: "2.5 hrs",
            description: "Deep shampooing and fabric protection",
            seatingCapacity: "3-Seater",
            additionalFeatures: ["Stain protection", "Deodorizing treatment"],
          },
          {
            id: "carpet-clean",
            name: "Carpet Deep Clean",
            price: 850,
            originalPrice: 950,
            duration: "2 hrs",
            description: "Deep cleaning for up to 100 sq ft carpet area",
            area: "100 sq ft",
          },
        ],
        services: [
          "Sofa & Cushion Cleaning",
          "Carpet Cleaning",
          "Chair Cleaning",
        ],
        detailedServices: [
          {
            name: "Sofa & Cushion Cleaning",
            description:
              "Professional cleaning that removes dust, stains, and odors from all types of sofas",
            image: "/assets/images/sofa-cleaning.png",
          },
          {
            name: "Carpet Cleaning",
            description:
              "Deep extraction cleaning for all types of carpets and rugs",
            image: "/assets/images/carpet-cleaning.png",
          },
          {
            name: "Chair Cleaning",
            description:
              "Cleaning service for dining chairs, office chairs, and recliners",
            image: "/assets/images/chair-cleaning.png",
          },
        ],
      },
      {
        id: "laundry-iron",
        name: "Laundry & Ironing",
        icon: "/assets/images/laundry-iron-icon.png",
        rating: 4.67,
        reviews: 732,
        packages: [
          {
            id: "basic-wash",
            name: "Basic Wash (5kg)",
            price: 399,
            originalPrice: 449,
            duration: "24 hrs turnaround",
            description: "Machine wash for regular clothes",
            weight: "5kg",
          },
          {
            id: "wash-iron",
            name: "Wash & Iron (5kg)",
            price: 599,
            originalPrice: 699,
            duration: "48 hrs turnaround",
            description: "Machine wash and professional ironing",
            weight: "5kg",
          },
          {
            id: "premium-dry",
            name: "Premium Dry Cleaning",
            price: 799,
            originalPrice: 899,
            duration: "72 hrs turnaround",
            description: "Professional dry cleaning for delicate fabrics",
            perItem: true,
          },
        ],
        services: ["Washing Clothes", "Washing and Ironing", "DryCleaning"],
        detailedServices: [
          {
            name: "Washing Clothes",
            description:
              "Machine washing with premium detergents for all types of clothes",
            image: "/assets/images/washing-clothes.png",
          },
          {
            name: "Washing and Ironing",
            description:
              "Complete service including washing, drying, and professional ironing",
            image: "/assets/images/washing-ironing.png",
          },
          {
            name: "DryCleaning",
            description:
              "Professional dry cleaning for delicate fabrics and formal wear",
            image: "/assets/images/dry-cleaning.png",
          },
        ],
      },
    ],
    benefits: [
      "Verified Professionals",
      "Safe Chemicals",
      "Superior Stain Removal",
    ],
    offers: [
      {
        title: "Save 10% on every order",
        description: "Get Plus now",
      },
      {
        title: "First-time user? Use code WELCOME15",
        description: "15% off up to ₹100",
      },
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
        rating: 4.8,
        reviews: 654,
        packages: [
          {
            id: "basic-lawn",
            name: "Basic Lawn Maintenance",
            price: 499,
            originalPrice: 599,
            duration: "1 hr",
            description: "Lawn mowing and basic maintenance",
            area: "Up to 1000 sq ft",
          },
          {
            id: "premium-lawn",
            name: "Premium Lawn Care",
            price: 899,
            originalPrice: 999,
            duration: "2 hrs",
            description:
              "Complete lawn care including mowing, edging, and fertilizing",
            area: "Up to 1000 sq ft",
            additionalFeatures: ["Fertilizer application", "Weed control"],
          },
        ],
        services: ["Grass Cutting", "Weeding", "Fertilization"],
        detailedServices: [
          {
            name: "Grass Cutting",
            description:
              "Professional lawn mowing service for a clean, even cut",
            image: "/assets/images/grass-cutting.png",
          },
          {
            name: "Weeding",
            description:
              "Manual and targeted weed removal to keep your lawn healthy",
            image: "/assets/images/weeding.png",
          },
          {
            name: "Fertilization",
            description:
              "Application of quality fertilizers to promote lush green growth",
            image: "/assets/images/fertilization.png",
          },
        ],
      },
      {
        id: "plant-maintenance",
        name: "Plant Maintenance",
        icon: "/assets/images/plant-maintenance-icon.png",
        rating: 4.9,
        reviews: 412,
        packages: [
          {
            id: "basic-plant",
            name: "Basic Plant Care",
            price: 349,
            originalPrice: 399,
            duration: "1 hr",
            description:
              "Watering, pruning, and basic care for indoor and outdoor plants",
            plantCount: "Up to 10 plants",
          },
          {
            id: "premium-plant",
            name: "Premium Plant Care",
            price: 649,
            originalPrice: 749,
            duration: "2 hrs",
            description:
              "Complete plant care including fertilizing and pest treatment",
            plantCount: "Up to 15 plants",
            additionalFeatures: ["Disease diagnosis", "Nutrient supplements"],
          },
        ],
        services: ["Watering", "Pruning", "Pest Control"],
        detailedServices: [
          {
            name: "Watering",
            description:
              "Regular watering schedule customized to each plant's needs",
            image: "/assets/images/watering.png",
          },
          {
            name: "Pruning",
            description:
              "Expert pruning to promote healthy growth and attractive appearance",
            image: "/assets/images/pruning.png",
          },
          {
            name: "Pest Control",
            description:
              "Eco-friendly pest management solutions for all types of plants",
            image: "/assets/images/pest-control.png",
          },
        ],
      },
    ],
    benefits: [
      "Experienced Gardeners",
      "Eco-friendly Products",
      "Plant Health Guarantee",
    ],
    offers: [
      {
        title: "Monthly plan saves 20%",
        description: "Subscribe for regular visits",
      },
      {
        title: "Seasonal special: 15% off",
        description: "Limited time spring offer",
      },
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
        rating: 4.86,
        reviews: 742,
        packages: [
          {
            id: "basic-meal",
            name: "Basic Meal Service",
            price: 799,
            originalPrice: 899,
            duration: "2 hrs",
            description: "Preparation of one meal for up to 4 people",
            servings: 4,
          },
          {
            id: "premium-meal",
            name: "Premium Meal Service",
            price: 1499,
            originalPrice: 1699,
            duration: "3 hrs",
            description: "Gourmet meal preparation with premium ingredients",
            servings: 4,
            additionalFeatures: ["Dessert included", "Dietary accommodations"],
          },
          {
            id: "weekly-plan",
            name: "Weekly Meal Plan",
            price: 3999,
            originalPrice: 4599,
            duration: "2 visits, 3 hrs each",
            description: "Multiple meals prepared and stored for the week",
            servings: "5 days, 4 people",
          },
        ],
        services: ["Breakfast", "Lunch", "Dinner"],
        detailedServices: [
          {
            name: "Breakfast",
            description:
              "Fresh breakfast options from continental to full traditional breakfast",
            image: "/assets/images/breakfast.png",
          },
          {
            name: "Lunch",
            description:
              "Healthy and delicious lunch preparations that can be stored for later",
            image: "/assets/images/lunch.png",
          },
          {
            name: "Dinner",
            description:
              "Complete dinner service with appetizers, main course, and sides",
            image: "/assets/images/dinner.png",
          },
        ],
      },
      {
        id: "specialty-cuisine",
        name: "Specialty Cuisine",
        icon: "/assets/images/specialty-cuisine-icon.png",
        rating: 4.92,
        reviews: 568,
        packages: [
          {
            id: "cuisine-basic",
            name: "Specialty Meal",
            price: 1299,
            originalPrice: 1499,
            duration: "3 hrs",
            description: "Authentic specialty cuisine meal for up to 4 people",
            servings: 4,
          },
          {
            id: "cuisine-premium",
            name: "Gourmet Experience",
            price: 2499,
            originalPrice: 2799,
            duration: "4 hrs",
            description: "Premium dining experience with multiple courses",
            servings: 4,
            additionalFeatures: [
              "Wine pairing recommendations",
              "Chef's special appetizers",
            ],
          },
          {
            id: "cuisine-party",
            name: "Dinner Party Service",
            price: 4999,
            originalPrice: 5499,
            duration: "6 hrs",
            description: "Complete dinner party service for special occasions",
            servings: "6-8 people",
            additionalFeatures: ["Table presentation", "Multiple courses"],
          },
        ],
        services: ["Indian", "Italian", "Chinese"],
        detailedServices: [
          {
            name: "Indian",
            description:
              "Authentic Indian cuisine covering various regional specialties",
            image: "/assets/images/indian-cuisine.png",
          },
          {
            name: "Italian",
            description:
              "Traditional Italian dishes from pasta to risotto and authentic pizzas",
            image: "/assets/images/italian-cuisine.png",
          },
          {
            name: "Chinese",
            description:
              "Classic Chinese cooking techniques and dishes with authentic flavors",
            image: "/assets/images/chinese-cuisine.png",
          },
        ],
      },
    ],
    benefits: [
      "Certified Chefs",
      "Custom Menu Planning",
      "Dietary Accommodations",
    ],
    offers: [
      {
        title: "First booking 15% off",
        description: "Use code CHEFNEW15",
      },
      {
        title: "Monthly subscription saves 25%",
        description: "Regular meal preparation at discounted rates",
      },
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
        rating: 4.94,
        reviews: 823,
        packages: [
          {
            id: "basic-elderly",
            name: "Basic Care (4 hours)",
            price: 899,
            originalPrice: 999,
            duration: "4 hrs",
            description: "Essential care services for elderly individuals",
            visitType: "One-time",
          },
          {
            id: "premium-elderly",
            name: "Premium Care (8 hours)",
            price: 1699,
            originalPrice: 1899,
            duration: "8 hrs",
            description: "Comprehensive care with additional health monitoring",
            visitType: "One-time",
            additionalFeatures: [
              "Vital signs monitoring",
              "Activity assistance",
            ],
          },
          {
            id: "weekly-elderly",
            name: "Weekly Care Plan",
            price: 5999,
            originalPrice: 6799,
            duration: "5 days, 4 hrs each",
            description: "Regular weekday care services",
            visitType: "Weekly subscription",
          },
        ],
        services: [
          "Medication Reminder",
          "Bathing Assistance",
          "Meal Preparation",
        ],
        detailedServices: [
          {
            name: "Medication Reminder",
            description:
              "Timely reminders and assistance with medication schedules",
            image: "/assets/images/medication-reminder.png",
          },
          {
            name: "Bathing Assistance",
            description: "Dignified and safe assistance with personal hygiene",
            image: "/assets/images/bathing-assistance.png",
          },
          {
            name: "Meal Preparation",
            description:
              "Preparation of nutritious meals according to dietary needs",
            image: "/assets/images/meal-preparation.png",
          },
        ],
      },
      {
        id: "child-care",
        name: "Child Care",
        icon: "/assets/images/child-care-icon.png",
        rating: 4.89,
        reviews: 756,
        packages: [
          {
            id: "basic-childcare",
            name: "Basic Childcare (4 hours)",
            price: 799,
            originalPrice: 899,
            duration: "4 hrs",
            description: "Supervision and basic care for children",
            childrenCount: "Up to 2 children",
          },
          {
            id: "premium-childcare",
            name: "Premium Childcare (8 hours)",
            price: 1499,
            originalPrice: 1699,
            duration: "8 hrs",
            description: "Comprehensive childcare with educational activities",
            childrenCount: "Up to 2 children",
            additionalFeatures: ["Educational activities", "Meal preparation"],
          },
          {
            id: "weekly-childcare",
            name: "Weekly Childcare Plan",
            price: 4999,
            originalPrice: 5799,
            duration: "5 days, 4 hrs each",
            description: "Regular weekday childcare services",
            childrenCount: "Up to 2 children",
          },
        ],
        services: ["Feeding", "Diaper Changing", "Playtime Supervision"],
        detailedServices: [
          {
            name: "Feeding",
            description:
              "Age-appropriate feeding assistance and meal preparation",
            image: "/assets/images/feeding.png",
          },
          {
            name: "Diaper Changing",
            description: "Hygienic diaper changing and proper disposal",
            image: "/assets/images/diaper-changing.png",
          },
          {
            name: "Playtime Supervision",
            description:
              "Engaging and supervised play activities appropriate for each age group",
            image: "/assets/images/playtime-supervision.png",
          },
        ],
      },
    ],
    benefits: [
      "Background Verified",
      "First Aid Certified",
      "Experienced Professionals",
    ],
    offers: [
      {
        title: "10% off on monthly plans",
        description: "Regular care at reduced rates",
      },
      {
        title: "First booking special: 20% off",
        description: "Use code CARE20",
      },
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
        rating: 4.78,
        reviews: 695,
        packages: [
          {
            id: "basic-exterior",
            name: "Basic Exterior Wash",
            price: 399,
            originalPrice: 499,
            duration: "45 mins",
            description: "Standard exterior wash and wipe",
            carType: "Sedan/Hatchback",
          },
          {
            id: "premium-exterior",
            name: "Premium Exterior Detail",
            price: 899,
            originalPrice: 999,
            duration: "2 hrs",
            description: "Complete exterior detailing with wax protection",
            carType: "Sedan/Hatchback",
            additionalFeatures: ["Tire dressing", "Paint protection"],
          },
          {
            id: "suv-exterior",
            name: "SUV/MUV Exterior Detail",
            price: 1199,
            originalPrice: 1399,
            duration: "2.5 hrs",
            description: "Complete exterior detailing for larger vehicles",
            carType: "SUV/MUV",
            additionalFeatures: ["Tire dressing", "Paint protection"],
          },
        ],
        services: ["Car Wash", "Waxing", "Scratch Removal"],
        detailedServices: [
          {
            name: "Car Wash",
            description:
              "Professional exterior wash using premium cleaning solutions",
            image: "/assets/images/car-wash.png",
          },
          {
            name: "Waxing",
            description:
              "Paint protection and enhanced shine with quality car wax",
            image: "/assets/images/waxing.png",
          },
          {
            name: "Scratch Removal",
            description: "Minor scratch removal and paint touch-up services",
            image: "/assets/images/scratch-removal.png",
          },
        ],
      },
      {
        id: "interior-cleaning",
        name: "Interior Cleaning",
        icon: "/assets/images/interior-cleaning-icon.png",
        rating: 4.82,
        reviews: 612,
        packages: [
          {
            id: "basic-interior",
            name: "Basic Interior Clean",
            price: 599,
            originalPrice: 699,
            duration: "1 hr",
            description: "Standard interior vacuuming and wipe down",
            carType: "Sedan/Hatchback",
          },
          {
            id: "premium-interior",
            name: "Premium Interior Detail",
            price: 999,
            originalPrice: 1199,
            duration: "2.5 hrs",
            description:
              "Deep interior cleaning with fabric/leather conditioning",
            carType: "Sedan/Hatchback",
            additionalFeatures: ["Stain removal", "Odor elimination"],
          },
          {
            id: "suv-interior",
            name: "SUV/MUV Interior Detail",
            price: 1399,
            originalPrice: 1599,
            duration: "3 hrs",
            description: "Deep interior detailing for larger vehicles",
            carType: "SUV/MUV",
            additionalFeatures: ["Stain removal", "Odor elimination"],
          },
        ],
        services: ["Vacuuming", "Dashboard Cleaning", "Leather Polishing"],
        detailedServices: [
          {
            name: "Vacuuming",
            description:
              "Thorough vacuuming of all interior surfaces including hard-to-reach areas",
            image: "/assets/images/vacuuming.png",
          },
          {
            name: "Dashboard Cleaning",
            description:
              "Detailed cleaning of dashboard, console, and interior panels",
            image: "/assets/images/dashboard-cleaning.png",
          },
          {
            name: "Leather Polishing",
            description:
              "Professional conditioning and polishing for leather interiors",
            image: "/assets/images/leather-polishing.png",
          },
        ],
      },
    ],
    benefits: [
      "Water-saving Techniques",
      "Premium Products",
      "Doorstep Service",
    ],
    offers: [
      {
        title: "Package deal: Interior + Exterior",
        description: "Save 20% on combined services",
      },
      {
        title: "Monthly plan available",
        description: "4 washes per month at 30% off",
      },
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
        rating: 4.91,
        reviews: 875,
        packages: [
          {
            id: "basic-school",
            name: "Single Subject (4 sessions)",
            price: 2499,
            originalPrice: 2999,
            duration: "4 sessions x 1.5 hrs",
            description: "Focused tutoring for one school subject",
            level: "Grade 1-12",
          },
          {
            id: "premium-school",
            name: "Multiple Subjects (8 sessions)",
            price: 4499,
            originalPrice: 4999,
            duration: "8 sessions x 1.5 hrs",
            description: "Comprehensive tutoring for multiple subjects",
            level: "Grade 1-12",
            additionalFeatures: [
              "Progress reports",
              "Customized study material",
            ],
          },
          {
            id: "monthly-school",
            name: "Monthly Package",
            price: 8999,
            originalPrice: 9999,
            duration: "16 sessions x 1.5 hrs",
            description: "Complete monthly tutoring for all subjects",
            level: "Grade 1-12",
            additionalFeatures: ["Weekly assessments", "Parent consultations"],
          },
        ],
        services: ["Mathematics", "Science", "English", "History"],
        detailedServices: [
          {
            name: "Mathematics",
            description:
              "Personalized mathematics tutoring from basic arithmetic to advanced calculus",
            image: "/assets/images/mathematics.png",
          },
          {
            name: "Science",
            description:
              "Expert tutoring in physics, chemistry, and biology with practical applications",
            image: "/assets/images/science.png",
          },
          {
            name: "English",
            description:
              "Comprehensive English language and literature tutoring",
            image: "/assets/images/english.png",
          },
          {
            name: "History",
            description:
              "Engaging history lessons covering world and national history",
            image: "/assets/images/history.png",
          },
        ],
      },
      {
        id: "competitive-exam",
        name: "Competitive Exam Coaching",
        icon: "/assets/images/competitive-exam-icon.png",
        rating: 4.88,
        reviews: 723,
        packages: [
          {
            id: "basic-exam",
            name: "Foundation Package (8 sessions)",
            price: 3999,
            originalPrice: 4499,
            duration: "8 sessions x 2 hrs",
            description: "Basic preparation for competitive exams",
            examType: "Multiple exams",
          },
          {
            id: "intensive-exam",
            name: "Intensive Package (16 sessions)",
            price: 7499,
            originalPrice: 8499,
            duration: "16 sessions x 2 hrs",
            description: "Comprehensive exam preparation with mock tests",
            examType: "Single exam focus",
            additionalFeatures: ["Mock tests", "Personalized strategy"],
          },
          {
            id: "complete-exam",
            name: "Complete Preparation",
            price: 14999,
            originalPrice: 16999,
            duration: "32 sessions x 2 hrs",
            description: "End-to-end preparation for competitive exams",
            examType: "Single exam focus",
            additionalFeatures: [
              "Mock interviews",
              "Previous year analysis",
              "Daily assignments",
            ],
          },
        ],
        services: ["JEE", "NEET", "UPSC", "CAT"],
        detailedServices: [
          {
            name: "JEE",
            description:
              "Specialized coaching for JEE Main and Advanced with focus on problem-solving",
            image: "/assets/images/jee.png",
          },
          {
            name: "NEET",
            description:
              "Comprehensive preparation for medical entrance examinations",
            image: "/assets/images/neet.png",
          },
          {
            name: "UPSC",
            description:
              "Strategic guidance and preparation for civil services examinations",
            image: "/assets/images/upsc.png",
          },
          {
            name: "CAT",
            description:
              "Expert coaching for management entrance exams with emphasis on aptitude",
            image: "/assets/images/cat.png",
          },
        ],
      },
    ],
    benefits: [
      "Qualified Educators",
      "Customized Learning Plans",
      "Regular Assessments",
    ],
    offers: [
      {
        title: "Sibling discount: 15% off",
        description: "For two or more students",
      },
      {
        title: "Early bird special: 10% off",
        description: "Book 30 days in advance",
      },
    ],
  },
];

export default services;
