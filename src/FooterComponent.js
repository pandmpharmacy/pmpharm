import React from "react";
import "./FooterComponent.css";
import logo from "../src/PMLOGO.png";

const navigationItems = [
  "Retail Pharmacy",
  "Compounding Pharmacy",
  "Medical Supplies",
  "About",
  "Contact Us",
  // ... Add more navigation items as needed
];

function FooterComponent() {
  const address = "7753 Lake Worth Rd Lake Worth, FL 33467";
  const mapLink = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}`;

  return (
    <>
      <footer className="footer-container">
        <div className="footer-column">
          <img src={logo} alt="logo" className="footer-logo" />
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            <a href={mapLink} target="_blank" rel="noopener noreferrer">
              7753 Lake Worth Rd Lake Worth, FL 33467
            </a>
          </p>
          <p>
            <a href="tel:+15616608650">(561) 660-8650</a>
          </p>
          <p>
            <a href="mailto:support@pandmpharmacy.com">
              support@pandmpharmacy.com
            </a>
          </p>
        </div>

        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            At P & M Pharmacy, we prioritize your health. With years of
            experience and a dedicated team, we ensure you receive the best
            medications available. Trust us for all your pharmaceutical needs.
          </p>
        </div>

        <div className="footer-column">
          <h3>Navigation</h3>
          <ul className="footer-nav-list">
            {navigationItems.map((navItem, index) => (
              <li key={index}>{navItem}</li>
            ))}
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; {new Date().getFullYear()} P&M Pharmacy. All rights reserved.
      </div>
    </>
  );
}

export default FooterComponent;
