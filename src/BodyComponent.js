import React from "react";
import "./BodyComponent.css";
import logo from "../src/PMLOGO.png";

function BodyComponent() {
  const specialties = [
    "Dermatology",
    "Vets/Pets",
    "Podiatry",
    "Pediatrics",
    "Sports Medicine",
    "Wound Care",
    "Hormone Replacement"
  ];

  return (
    <div className="body-wrapper">


      <div className="body-container">
        <img src={logo} alt="" className="featured_image" />
        <h1>Welcome to P & M Pharmacy for all your medication needs</h1>
        <h2 id="alert">The Most Trusted Compounding Pharmacy in West Palm Beach.</h2>
        <h3>
          P&M Pharmacy is a full service Greenacres Pharmacy / Drug Store. We
          serve Lake Worth, Wellington, Atlantis, Greenacres, Boynton Beach, West
          Palm Beach, Lantana and all surrounding areas in Florida.
        </h3>
      </div>
      <div className="body-speacialtiy">
        <h1>Our Compounding Specialty</h1>
        <div className="body_boxes">
          {specialties.map((specialty, index) => (
            <div className="body_box" key={index}>
              <h4>{specialty}</h4>
              <img src={logo} alt={`${specialty}`} className="box_image" />
              <button className="box_button">More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BodyComponent;
