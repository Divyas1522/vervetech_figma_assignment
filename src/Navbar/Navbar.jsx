import React from 'react';
import './Navbar.css';
import logo from '../assets/Logo.png';

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Jadoo Logo" className="logo" />
        </div>
        <div className="navbar-links">
          <div className="navbar-links-items">Destinations</div>
          <div className="navbar-links-items">Hotels</div>
          <div className="navbar-links-items">Flights</div>
          <div className="navbar-links-items">Bookings</div>
          <div className="navbar-links-items">Login</div>
          <div className="navbar-links-items signup">Sign up</div>
          <div className="navbar-links-items">EN
            <select name="" id=""></select>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
