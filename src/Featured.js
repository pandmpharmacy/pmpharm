import React from "react";
import logoWebp from "../src/images/logo.webp";
import logoPng from "../src/images/PMLOGO.png";
import "./Featured.css";
import { useNavigate } from 'react-router-dom';

function Featured() {
  const navigate = useNavigate();
  return (
    <div className="featured_container">
      <div className="featured_box">
        <picture>
          <source srcSet={logoWebp} type="image/webp" />
          <img src={logoPng} alt="" className="featured_image" />
        </picture>
      </div>
      <div id="featured_text" className="">
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
        <h3 onClick={() => navigate('/contact-us')}  className="featured_footer">
          Contact <br />
          <a href="tel:561-660-8650">561-660-8650</a>
        </h3>
      </div>
      <div className="featured_box">
        <picture>
          <source srcSet={logoWebp} type="image/webp" />
          <img src={logoPng} alt="" className="featured_image" />
        </picture>
      </div>
    </div>
  );
}

export default Featured;
