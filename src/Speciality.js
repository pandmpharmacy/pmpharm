import React from "react";
import "./Speciality.css";
import logo from "../src/images/PMLOGO.png";
import { useNavigate } from "react-router-dom";

function Speciality() {
  const navigate = useNavigate();

  const specialties = [
    "Dermatology",
    "Veterinarian",
    "Hormone Replacement Therapy (HRT)",
  ];
  const handleSpecialtyClick = (specialty) => {
    let hash = "";
    switch (specialty) {
      case "Dermatology":
        hash = "#compoundingDerm-title-box";
        break; // Add the break statement here
      case "Vets/Pets":
        hash = "#compoundingPet-title-box";
        break; // And here
      case "Hormone Replacement Therapy":
        hash = "#compoundingHRT-title-box";
        break; // This one is fine
      default:
        hash = ""; // Or whatever default value you want to set
        break;
    }
    navigate(`/compounding${hash}`);
  };
  return (
    <div>
      <div className="body-specialty">
        <h2>Our Compounding Specialties</h2>
        <div className="body-boxes">
          {specialties.map((specialty, index) => (
            <div
              className="body-box"
              key={index}
              onClick={() => handleSpecialtyClick(specialty)}
            >
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
