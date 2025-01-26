
import BannerImg from "../../assets/website/About.png";
import { VscVerifiedFilled, VscWatch, VscLink } from "react-icons/vsc";
import "./About.css";

const About = () => {
  return (
    <>
      <span id="about"></span>
      <div className="about-section">
        <div className="about-container">
          <div className="about-grid">
            {/* Image section */}
            <div className="about-image" data-aos="zoom-in">
              <img
                src={BannerImg}
                alt="banner img"
                className="about-banner-img"
              />
            </div>
            {/* Text content section */}
            <div className="about-text">
              <h1 data-aos="fade-up" className="about-title">
                About Express Delivery
              </h1>
              <p data-aos="fade-up" className="about-description">
                Delivering happiness, one parcel at a time. We ensure safe,
                reliable, and timely deliveries to your doorstep.
              </p>

              <div className="about-grid-content">
                <div className="about-highlights">
                  <div data-aos="fade-up" className="highlight-item">
                    <VscVerifiedFilled className="highlight-icon bg-red" />
                    <span className="highlight-text">Reliable</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="highlight-item"
                  >
                    <VscWatch className="highlight-icon bg-orange" />
                    <span className="highlight-text">Timely Deliveries</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="highlight-item"
                  >
                    <VscLink className="highlight-icon bg-yellow" />
                    <span className="highlight-text">Wide Coverage</span>
                  </div>
                </div>
                <div
                  data-aos="slide-left"
                  className="about-commitment-section"
                >
                  <h1 className="commitment-title">Our Commitment</h1>
                  <p className="commitment-description">
                    Ensuring your packages arrive safely and on time is our top
                    priority. Experience fast and secure delivery services
                    tailored to meet your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
