import React from "react";
import "./BodyComponent.css";
import TopServices from "./TopServices";

import Featured from "./Featured";
import Speciality from "./Speciality";
function BodyComponent() {

  return (
    <div className="body-wrapper">
      <div className="body-container">
        <Featured />
      </div>
      <TopServices />

      <Speciality />
    </div>
  );
}
export default BodyComponent;
