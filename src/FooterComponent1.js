import React from "react";
import "./FooterComponent.css";
import logo from "../src/PMLOGO.png";

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

function FooterComponent() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-column">
          <img src={logo} alt="logo" className="footer-logo" />
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Address: 7753 Lake Worth Rd
            Lake Worth, FL 33467</p>
          <p>Phone: (561) 660-8650</p>
          <p>Email: support@pandmpharmacy.com</p>
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
      {/* <div className="copyright">
        © {new Date().getFullYear()} P & M Pharmacy. All rights reserved.
      </div> */}
    </>
  );
}

export default FooterComponent;