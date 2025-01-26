// Navbar.jsx

import "./Navbar.css";
import Logo from "../../assets/website/delivery_logo.png";
import {useAuthentication} from "../../auth.js"
import { Link } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

const Navbar = () => {
  const {isAuthorized,logout} = useAuthentication();
  
      const handleLogout = () => {
          logout();
      }

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-flex">
          {/* Logo section */}
          <div className="navbar-logo">
            <a href="#" className="navbar-logo-link">
              <img src={Logo} alt="Logo" className="navbar-logo-img" />
              Express Delivery
            </a>
          </div>

          {/* Link section */}
          <div className="navbar-links">
            <ul className="navbar-menu">
              {Menu.map((menu) => (
                <li key={menu.id} className="navbar-menu-item">
                  <a href={menu.link} className="navbar-menu-link">
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* <button className="navbar-signin-button">Sign-In</button>
            <button className="navbar-signin-button">Sign-In</button> */}
            <ul className="navbar-menu-right">
            {isAuthorized ? (
                <>
                  <li className="dashboard-icon">
                    <Link to = "/dashboard">DB</Link>
                  </li>
                  <li>
                    <Link onClick={handleLogout} to="/logout" className="navbar-signin-button">Logout</Link>
                  </li>
                </>
                
            ) : (
                <>
                    <li>
                        <Link to="/login" className="navbar-signin-button">Log In</Link>
                    </li>
                    <li>
                        <Link to="/register" className="navbar-signin-button">Register</Link>
                    </li>
                </>
            )}
            
            

        </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;