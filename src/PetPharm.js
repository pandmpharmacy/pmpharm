import React from 'react'
import LeftInterlockedTextBoxes from './LeftInterlockedTextBoxes'
import LandingHeader from './LandingHeader'
import { useNavigate } from "react-router-dom";

function PetPharm() {
    const navigate = useNavigate();

  return (
    <div>
      <LeftInterlockedTextBoxes message={"mesage"} />
      <LandingHeader title={"Pet Pharamacy"} />
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  )
}

export default PetPharm