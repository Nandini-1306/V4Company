import './HomeServices.css';
import { maid, gardener, chef, care_taker, car_wash, tutor, serviceBanner } from "../../assets/images";


const services = [
  { id: 1, name: "Home-Maid", img: maid },
  { id: 2, name: "Gardener", img: gardener },
  { id: 3, name: "Chef", img: chef },
  { id: 4, name: "Care Taker", img: care_taker },
  { id: 5, name: "Car Washer", img: car_wash },
  { id: 6, name: "Home Tutor", img: tutor },
];

const HomeServices = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Essential Services, Anytime, Anywhere</h2>
      <div className="services-content">
        {/* Services Grid */}
        <div className="services-box">
          <h3>Your Needs, Our Services</h3>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <img src={service.img} alt={service.name} />
                <p>{service.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right-Side Banner */}
        <div className="service-banner">
          <img src={serviceBanner} alt="Service Offerings" />
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
