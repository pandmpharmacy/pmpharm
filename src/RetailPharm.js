import React from "react";
import { useNavigate } from "react-router-dom";
import LeftInterlockedTextBoxes from "./LeftInterlockedTextBoxes";
import LandingHeader from "./LandingHeader";

function RetailPharm() {
  const navigate = useNavigate();
  return (
    <div>
      <LeftInterlockedTextBoxes message={"mesage"} />
      <LandingHeader title={"Retail Pharamacy"} />
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}

export default RetailPharm;
