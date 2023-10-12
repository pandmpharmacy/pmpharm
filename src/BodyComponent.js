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
      {/* <LeftInterlockedTextBoxes message={first_intro} />
      <RightInterlockedTextBoxes message={second_intro} />
      <LeftInterlockedTextBoxes message={third_intro} /> */}
      <Speciality />
      {/* <RightInterlockedTextBoxes message={fourth_intro} /> */}
    </div>
  );
}
export default BodyComponent;
