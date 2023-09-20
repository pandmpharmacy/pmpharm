import React, { useState, useEffect } from "react";
import logo from "../src/logo.webp";
import "./HeaderComponent.css";

function HeaderComponent() {
  const navigationItems = [
    "Retail Pharmacy",
    "Compounding Humans",
    "Compounding Pets",
    "Immunization",
    "Medical Equipment",
    "About",
    "Contact Us",
    // ... Add more navigation items as needed
  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define the CSS class for the header based on hasScrolled
  const headerClass = `header_wrapper ${hasScrolled ? "with-shadow" : ""}`;

  return (
    <div className={headerClass}>
      <div className="logo_div">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <header className="header-container">
        <nav className="nav-section">
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          </div>
          {showMobileMenu ? (
            <ul className="nav-list">
              {navigationItems.map((navItem, index) => (
                <li className="nav-item" key={index}>
                  {navItem}
                </li>
              ))}
            </ul>
          ) : null}
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
