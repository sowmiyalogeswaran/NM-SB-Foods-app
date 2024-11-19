import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand-section">
        <h2 className="navbar-brand">SB Food Delivery</h2>
        <div className="location-dropdown">
          <button className="location-button" onClick={toggleDropdown}>
            Enter Delivery Location ▾
          </button>
          {isDropdownOpen && (
            <div className="location-dropdown-menu">
              <h3>Enter your delivery location</h3>
              <div className="location-options">
                <button>Bengaluru</button>
                <button>Mumbai</button>
                <button>New Delhi</button>
                <button>Gurgaon</button>
              </div>
              <div className="location-input-section">
                <input
                  type="text"
                  placeholder="Enter min 11 characters to search your location"
                />
                <button className="locate-button">Locate Me</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/MenuPage">Menu</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
