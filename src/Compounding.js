import React from "react";
import { useNavigate } from "react-router-dom";
import LeftInterlockedTextBoxes from "./LeftInterlockedTextBoxes";
import LandingHeader from "./LandingHeader";
import PetCompunding from "./PetCompunding";
import HumanCompounding from "./HumanCompounding";

function Compounding() {
  const navigate = useNavigate();

  return (
    <div>
      <LeftInterlockedTextBoxes message={"mesage"} />
      <LandingHeader title={"Compounding"} />
      <button onClick={() => navigate("/")}>Go to Home</button>
      <div onClick={() => navigate("/retail-compounding")}>
        <HumanCompounding />
      </div>
      <div onClick={() => navigate("/pet-compounding")}>
        <PetCompunding />
      </div>
    </div>
  );
}

export default Compounding;
