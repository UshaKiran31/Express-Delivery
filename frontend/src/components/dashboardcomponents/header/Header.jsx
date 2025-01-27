// import React from 'react';
import './Header.css';
import { useAuthentication } from '../../../auth';
import {
	HiOutlineDocumentText,
	HiOutlineBell,
  HiOutlineUserCircle
} from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {

  const {logout} = useAuthentication();

  const navigate = useNavigate();
  

      const handleLogout = () => {
          logout();
          navigate('//');
      }

  return (
    <header className="layout-header">
      <div className="brand">
        <h1><Link to = "/dashboard" className="logo">ExpressDelivery</Link> </h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="actions">
      <Link to = "/" onClick={handleLogout}  className="navbar-signin-button">Logout</Link>
        <span className="icon"> <Link to = "/notifications" className="nav-icon" ><HiOutlineBell /></Link></span>
        <span className="icon"><Link to = "/help" className="nav-icon" ><HiOutlineDocumentText /></Link></span>
        <span className="icon user-icon"><Link to = "/settings" className="nav-icon" >< HiOutlineUserCircle /></Link></span>
        
      </div>
    </header>
  );
}

