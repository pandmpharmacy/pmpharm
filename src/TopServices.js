import React from "react";
import "./TopServices.css";
import { useNavigate } from 'react-router-dom';

/*import logo from "../src/images/PMLOGO.png"; */

function TopServices() {
  const navigate = useNavigate();

  return (
    <div className="service-container">
      <div>
      <div  onClick={() => navigate('/retail')} className="service-box">
          <h1 className="box_image1">&#x1F48A;</h1>
          <h4>Retail Pharmacy</h4>
          {/* <button className="box_button">More</button> */}
        </div>
      </div>
      <div>
        <div onClick={() => navigate('/compounding')} className="service-box">
        <h1 className="box_image1">&#x1FAD9;</h1>
          <h4>Compounding Services</h4>
          {/* <button className="box_button">More</button> */}
        </div>
      </div>
      <div>
        <div  onClick={() => navigate('/pet')} className="service-box">
        <h1 className="box_image1">&#x1F415;</h1>
          <h4>Pet Pharmacy</h4>
          {/* <button className="box_button">More</button> */}
        </div>
      </div>
      <div>
        <div className="service-box">
        <h1 className="box_image1">&#x1FA7C;</h1>
          <h4>Medical Equipment</h4>
          {/* <button className="box_button">More</button> */}
        </div>
      </div>
    </div>
  );
}

export default TopServices;
