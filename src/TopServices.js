import React from "react";
import "./TopServices.css";
import { useNavigate } from "react-router-dom";

/*import logo from "../src/images/PMLOGO.png"; */

function TopServices() {
  const navigate = useNavigate();

  return (
    <div className="service-container">
      <div>
        <div
          onClick={() => navigate("/retail")}
          id="height_box"
          className="service-box"
        >
          <h1 className="box_image1">&#x1F48A;</h1>
          <h4>Retail Pharmacy</h4>
        </div>
      </div>
      <div>
        <div onClick={() => navigate("/pet")} className="service-box">
          <h1 className="box_image1">&#x1F415;</h1>
          <h4>Pet Pharmacy</h4>
        </div>
      </div>
      <div>
        <div
          onClick={() => navigate("/compounding")}
          id="compounding_boxes"
          className="service-box"
        >
          <h1 className="box_image1">&#x1FAD9;</h1>
          <h4>Compounding Services</h4>
        </div>
      </div>
      <div>
        <div onClick={() => navigate("/Immunization")} className="service-box">
          <h1 className="box_image1">&#x1F489;</h1>
          <h4>Immunization</h4>
        </div>
      </div>
      <div>
        <div
          onClick={() => navigate("/medical")}
          id="height_box"
          className="service-box"
        >
          <h1 className="box_image1">&#x1FA7C;</h1>
          <h4>Medical Equipment</h4>
        </div>
      </div>
    </div>
  );
}

export default TopServices;
