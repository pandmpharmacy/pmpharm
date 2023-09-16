import React from "react";
import "./Speciality.css";
import logo from "../src/PMLOGO.png";

function Speciality() {
  const specialties = [
    "Dermatology",
    "Vets/Pets",
    "Podiatry",
    "Pediatrics",
    "Sports Medicine",
    "Wound Care",
    "Hormone Replacement",
  ];
  return (
    <div>
      {" "}
      <div className="body-speacialtiy">
        <h1>Our Compounding Specialties</h1>
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

export default Speciality;
