import React from "react";
// import dotenv from "dotenv";
import "./Contact.css";
function Contact() {
  return (
    
    <div className="contact_container">
      <h1>Contact US</h1>
      <div className="contact_maps">
        <div className="contact_wrapper">
          <h3>
            P&M Pharmacy is a full service Greenacres Pharmacy / Drug Store. We
            serve Lake Worth, Wellington, Atlantis, Greenacres, Boynton Beach,
            West Palm Beach, Lantana and all surrounding areas in Florida. Visit
            us today to see the P&M difference.
          </h3>
          <div className="contact_info">
            <h3>7753 Lake Worth Rd, Greenacres, FL 33467</h3>
            <div>
              <a href="tel:561-660-8650">561-660-8650</a>
            </div>
            <div>
              <a href="mailto:support@pandmpharmacy.com">
                support@pandmpharmacy.com
              </a>
            </div>
          </div>
        </div>
        <div className="contact_location">
          <iframe
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC1w8NSfjIMAuP6stl7MBooF7HhdkbT8fo&q=P%26M+Pharmacy,Greenacres+FL`}
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Contact;
