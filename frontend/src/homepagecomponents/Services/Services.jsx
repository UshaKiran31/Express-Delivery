// import React from "react";
import "./Services.css"; // Import the CSS file
import Img2 from "../../assets/Services/CreateShippment.png";
import Img3 from "../../assets/Services/location.png";
import Img4 from "../../assets/Services/shipping.png";
import Img5 from "../../assets/Services/feedback.png";

const ServicesData = [
  {
    id: 0,
    img: Img2,
    name: "Create Shipment",
    description:
      "Create your shipment with us and get parcels delivered all over India easily.",
    aosDelay: "100",
  },
  {
    id: 1,
    img: Img3,
    name: "Track Shipment",
    description:
      "Track your shipment in real-time and get updates for deliveries across India.",
    aosDelay: "300",
  },
  {
    id: 2,
    img: Img4,
    name: "Reschedule Shipment",
    description:
      "Reschedule your shipments with us to ensure convenient delivery times.",
    aosDelay: "500",
  },
  {
    id: 3,
    img: Img5,
    name: "Feedback",
    description:
      "Give us feedback to help us improve and provide you with better services.",
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="services-container">
        <div className="services-header">
          <h1>Services We Provide</h1>
        </div>
        <div className="services-grid">
          {ServicesData.map((service) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
              className="service-card"
            >
              <div className="service-image-container">
                <img
                  src={service.img}
                  alt={`Service: ${service.name}`}
                  className="service-image"
                />
              </div>
              <div className="service-content">
                <h1>{service.name}</h1>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
