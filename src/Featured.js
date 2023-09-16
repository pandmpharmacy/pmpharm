import React from "react";
import logo from "../src/PMLOGO.png";
import "./Featured.css";
function Featured() {
  return (
    <div className="featured_container">
      <div className="featured_box">
        <img src={logo} alt="" className="featured_image" />
      </div>
      <div id="featured_text" className="featured_box">
        <h1 className="featured_header">
          Welcome to P & M Pharmacy for all your medication needs.
        </h1>
        <h3 id="alert">
          The Most Trusted Compounding Pharmacy in West Palm Beach.
        </h3>
        <p>
          P&M Pharmacy is a full service Greenacres Pharmacy / Drug Store. We
          serve Lake Worth, Wellington, Atlantis, Greenacres, Boynton Beach,
          West Palm Beach, Lantana and all surrounding areas in Florida.
        </p>
        <h3 className="featured_footer">
          Contact <br></br> 561-660-8650
        </h3>
      </div>
      <div className="featured_box">
        <img src={logo} alt="" className="featured_image" />
      </div>
    </div>
  );
}

export default Featured;
