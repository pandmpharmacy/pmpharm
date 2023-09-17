import React from "react";
import "./FooterComponent.css";
import logo from "../src/PMLOGO.png";

const navigationItems = [
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
          <p>Phone: <a className="contact-link" href="tel:+15616608650">(561) 660-8650</a></p>
          <p>Email: <a className="contact-link" href="mailto:support@pandmpharmacy.com">support@pandmpharmacy.com</a></p>
        </div>

        <div className="footer-column">
          <h3>About Us</h3>
          <p>
          At P & M Pharmacy, your health is our top priority.
          With our experienced and dedicated team, we provide the best pharmaceutical solutions for your needs.
          Trust us for all your medication needs.
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
