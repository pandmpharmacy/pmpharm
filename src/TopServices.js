import React from "react";
import "./TopServices.css";

function TopServices() {
    return (
        <div className="service-container">
            <div className="service-box">
                <h1>Retail Pharmacy</h1>
                <h2 id="alert">Learn More</h2>
            </div>
            <div className="service-box">
                <h1>Compounding Services</h1>
                <h2 id="alert">Learn More</h2>
            </div>
            <div className="service-box">
                <h1>
                    Medical Equipment
                </h1>
                <h2 id="alert">Learn More</h2>
            </div>
            <div className="service-box">
                <h1>
                    Pet Pharmacy
                </h1>
                <h2 id="alert">Learn More</h2>
            </div>
        </div>
    );
}

export default TopServices;
