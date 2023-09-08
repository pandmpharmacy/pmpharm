import React from "react";
import logo from "../src/PMLOGO.png";
import "./HeaderComponent.css";

function HeaderComponent() {
  const navigationItems = [
    "Products",
    "Refill",
    "Retail Pharmacy",
    "Compounding Pharmacy",
    "Medical & ADA Supplies",
    "About",
    "Contact Us",
    // ... Add more navigation items as needed
  ];

  return (
    <div className="header_wrapper">
      <div className="logo_div">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <header className="header-container">
        <nav className="nav-section">
          {navigationItems.map((navItem, index) => (
            <h2 className="nav-item" key={index}>
              {navItem}
            </h2>
          ))}
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
