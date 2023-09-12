import React, { useState } from "react";
import logo from "../src/PMLOGO.png";
import "./HeaderComponent.css";

function HeaderComponent() {
  const navigationItems = [
    "Products",
    "About",
    "Contact Us",
    // ... Add more navigation items as needed
  ];

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="header_wrapper">
      <div className="logo_div">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <header className="header-container">
        <nav className="nav-section">
          <ul className="nav-list">
            {navigationItems.map((navItem, index) => (
              <li className="nav-item" key={index}>
                {navItem}
              </li>
            ))}
            {/* Toggle button for the dropdown */}
            <li
              className={`nav-item more-button ${showDropdown ? "active" : ""}`}
              onClick={toggleDropdown}
            >
              More
              <ul className={`dropdown ${showDropdown ? "show" : ""}`}>
                {navigationItems.map((navItem, index) => (
                  <li className="dropdown-item" key={index}>
                    {navItem}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
