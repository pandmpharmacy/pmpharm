import React from "react";
import "./Speciality.css";
import logo from "../src/images/PMLOGO.png";

function Speciality() {
  const specialties = [
    "Dermatology",
    "Vets/Pets",
    "Hormone Replacement Therapy",
  ];
  return (
    <div>
      <div className="body-specialty"> {/* Correct the class name here */}
        <h1>Our Compounding Specialties</h1>
        <div className="body-boxes"> {/* Correct the class name here */}
          {specialties.map((specialty, index) => (
            <div className="body-box" key={index}> {/* Correct the class name here */}
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
