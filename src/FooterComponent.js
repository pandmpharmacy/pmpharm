import React from "react";
import "./FooterComponent.css";

const navigationItems = [
  "Nav 1",
  "Nav 2",
  // ... Add more navigation items as needed
];

function FooterComponent() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-column">
          <img
            src="path_to_logo_image.jpg"
            alt="logo"
            className="footer-logo"
          />
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Address: 1234 Pharmacy St.</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@pmpharmacy.com</p>
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
        © {new Date().getFullYear()} P & M Pharmacy. All rights reserved.
      </div>
    </>
  );
}

export default FooterComponent;
