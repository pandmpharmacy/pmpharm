import React, { useState } from "react";
import logo from "../src/images/logo.webp";
import "./HeaderComponent.css";
import logoWebp from "../src/images/logo.webp";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function HeaderComponent() {
  const navigate = useNavigate(); // Hook to get the navigate function

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };


  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");

    if (menuToggle && navList) {
      menuToggle.addEventListener("click", function () {
        navList.classList.toggle("active");
      });
    }
  });

  // Define the CSS class for the header based on hasScrolled

  // Define the homepage URL
  const homepageUrl = "/"; // Replace with your actual homepage URL

  return (
    <>
      <div className="header_wrapper">
        <div className="logo_div">
          <a href={homepageUrl}>
            {" "}
            {/* Add this anchor tag */}
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img src={logo} alt="logo" className="logo" />
            </picture>
          </a>
        </div>
        <header className="header-container">
          <nav className="nav-section">
            <>
              <div onClick={toggleMobileMenu} className="menu-toggle_container">
                <div class="menu-toggle">
                  <div class="bar"></div>
                  <div class="bar"></div>
                  <div class="bar"></div>
                </div>
              </div>

              <ul className="nav-list">
                <li
                  onClick={() => handleNavigation("/compounding")}
                  className="nav-item"
                >
                  About Us
                </li>
                <li
                  onClick={() => handleNavigation("/contact-us")}
                  className="nav-item"
                >
                  Contact Us
                </li>
              </ul>
            </>
          </nav>
        </header>
      </div>
      {showMobileMenu ? (
        <ul className={`mobile_nav-list ${showMobileMenu ? "active" : ""}`}>
          <li
            className="mobile_nav-item"
            onClick={() => handleNavigation("/compounding")}
          >
            About
          </li>
          <li
            className="mobile_nav-item"
            onClick={() => handleNavigation("/contact-us")}
          >
            Contact Us
          </li>
        </ul>
      ) : null}
    </>
  );
}

export default HeaderComponent;
