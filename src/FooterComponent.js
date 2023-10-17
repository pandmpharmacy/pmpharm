import React from "react";
import "./FooterComponent.css";
import logoPng from "../src/images/PMLOGO.png";
import logoWebp from "../src/images/logo.webp";
const navigationItems = [
  "Retail Pharmacy",
  "Compounding Pharmacy",
  "Medical & ADA Supplies",
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
          <picture>
            <source srcSet={logoWebp} type="image/webp" />
            <img src={logoPng} alt="" className="footer-logo" />
          </picture>
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
          <div className="footer_location">
            <iframe
              width="150"
              height="113"
              style={{ border: "0" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC1w8NSfjIMAuP6stl7MBooF7HhdkbT8fo&q=P%26M+Pharmacy,Greenacres+FL`}
              title="Google Maps"
            ></iframe>
          </div>
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
