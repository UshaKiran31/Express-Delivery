
import BackgroundImage from "../../assets/website/footerfinal.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import "./Footer.css";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Services", link: "/#services" },
];

const Footer = () => {
  return (
    <div className="footer">
      <div
        className="footer-background"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="footer-container">
          {/* Company details */}
          <div className="footer-company">
            <a href="#" className="footer-title">
              Express Delivery
            </a>
            <p className="footer-description">
              Deliver any parcel at your desired time, make
            </p>
          </div>

          {/* Footer links */}
          <div className="footer-links">
            <div className="footer-column">
              <h1 className="footer-heading">Important Links</h1>
              <ul>
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="footer-link">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h1 className="footer-heading">Quick Links</h1>
              <ul>
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="footer-link">
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="footer-column">
              <h1 className="footer-heading">Contact</h1>
              <p>Guntur, Andhra Pradesh</p>
              <p>+91 1234567890</p>
              <div className="footer-social">
                <a href="#">
                  <FaInstagram className="footer-icon" />
                </a>
                <a href="#">
                  <FaFacebook className="footer-icon" />
                </a>
                <a href="#">
                  <FaLinkedin className="footer-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
