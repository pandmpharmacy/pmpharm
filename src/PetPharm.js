import React from "react";
import LeftInterlockedTextBoxes from "./LeftInterlockedTextBoxes";
import LandingHeader from "./LandingHeader";
import { useNavigate } from "react-router-dom";
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. Sed malesuada, risus et sollicitudin aliquam, ante elit pellentesque odio, nec pulvinar libero magna sit amet nulla. Curabitur consectetur, enim sit amet auctor facilisis, sapien risus egestas orci, sed cursus quam ligula non augue. Nunc ut nunc vitae tellus ornare imperdiet.

Aliquam erat volutpat. In id efficitur dolor. Vivamus laoreet, nisi et pellentesque dictum, leo orci pharetra ipsum, sit amet tristique justo quam vitae mi. Aliquam non lorem et ante convallis tincidunt. Morbi id tincidunt risus, in suscipit ex. Maecenas ornare, ex a interdum consectetur, ex leo elementum risus, eget venenatis libero dui a ligula. Donec pretium id enim in dapibus.

Aenean porttitor erat a ultricies ornare. Maecenas in lacinia velit, at condimentum magna. Vivamus dapibus turpis et enim dictum, sed dignissim mi gravida. Nulla facilisi. Praesent nec fermentum nisi, a euismod quam. Aliquam erat volutpat. Nunc eu ligula nec lectus tincidunt commodo nec id erat.`;

function PetPharm() {
  const navigate = useNavigate();

  return (
    <div>
      <LeftInterlockedTextBoxes message={"mesage"} />
      <LandingHeader title={"Pet Pharamacy"} />
      <h5>{text} </h5>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}

export default PetPharm;
