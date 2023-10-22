import React, { useState, useEffect } from "react";
import logo from "../src/images/logo.webp";
import "./HeaderComponent.css";
import logoWebp from "../src/images/logo.webp";

function HeaderComponent() {
  const navigationItems = [

    "About",
    "Contact Us",

  ];

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  function calculateScrollPercentage() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    return scrollY / (documentHeight - viewportHeight);
  }
  const MAX_MARGIN_LEFT = -25; // This is a sample value. You can adjust based on your layout.

  window.addEventListener("scroll", () => {
    // Get the logo and its div
    const logo = document.querySelector(".logo");
    const logoDiv = document.querySelector(".logo_div");

    // Calculate the proportion of how much the page has been scrolled
    const scrollPercentage = calculateScrollPercentage();

    // Change the max-width of the logo based on scroll percentage
    const maxWidth = 80 - 70 * scrollPercentage; // linearly decrease to 30px
    logo.style.maxWidth = `${Math.max(maxWidth, 80)}px`; // Ensure it doesn't go below 30px
    const marginLeft = MAX_MARGIN_LEFT * scrollPercentage;
    logoDiv.style.marginLeft = `${Math.max(marginLeft, MAX_MARGIN_LEFT)}%`; // Use max to ensure it doesn't exceed MAX_MARGIN_LEFT
    // Move the logo_div to the left based on scroll percentage
  });
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
  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
      menuToggle.addEventListener('click', function () {
        navList.classList.toggle('active');
      });
    }
  });

  // Define the CSS class for the header based on hasScrolled
  const headerClass = `header_wrapper ${hasScrolled ? "with-shadow" : ""}`;

  // Define the homepage URL
  const homepageUrl = "/"; // Replace with your actual homepage URL

  return (
    <>
      <div className={headerClass}>
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
                {navigationItems.map((navItem, index) => (
                  <li className="nav-item" key={index}>
                    {navItem}
                  </li>
                ))}
              </ul>
            </>



          </nav>
        </header>

      </div>
      {showMobileMenu ? (
  <ul className="mobile_nav-list active">
    {navigationItems.map((navItem, index) => (
      <li className="mobile_nav-item" key={index}>
        {navItem}
      </li>
    ))}
  </ul>
) : null}


    </>

  );
}

export default HeaderComponent;
