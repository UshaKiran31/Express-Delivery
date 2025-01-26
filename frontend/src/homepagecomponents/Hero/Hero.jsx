
import HeroPng from "../../assets/website/delivery.png";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            {/* Text content section */}
            <div className="hero-text-section">
              <div className="hero-card">
                <h1 className="hero-title">Quick, Reliable And Affordable</h1>
                <p className="hero-description">
                  It takes just five minutes to send an express parcel anywhere
                  in India via ExpressDelivery. We are always at your service.
                </p>
                <div className="hero-input-container">
                  <input
                    type="text"
                    placeholder="Tracking Id...."
                    className="hero-input"
                  />
                  <button className="hero-button">Track</button>
                </div>
              </div>
            </div>
            {/* Image section */}
            <div className="hero-image-section">
              <img
                src={HeroPng}
                alt="delivery image"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
