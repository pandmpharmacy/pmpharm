import React from "react";
import "./BodyComponent.css";
import TopServices from "./TopServices";
import LeftInterlockedTextBoxes from "./LeftInterlockedTextBoxes";
import RightInterlockedTextBoxes from "./RightInterlockedTextBoxes";
import Featured from "./Featured";
import Speciality from "./Speciality";
function BodyComponent() {
  
  const first_intro =
    "At P&M Pharmacy, we believe in putting your health and well-being first, and our online platform is designed with your convenience in mind.";
  const second_intro =
    "Whether you're looking for prescription medications, over-the-counter remedies, or expert health advice, you've come to the right place.";
  const third_intro =
    "Our team of experienced pharmacists and healthcare professionals is here to support you on your journey to better health.";
  const fourth_intro =
    "We look forward to serving you with the same dedication and care that has made us a community favorite.";

  return (
    <div className="body-wrapper">
      <div className="body-container">
        <Featured />
      </div>
      <TopServices />
      <LeftInterlockedTextBoxes title="First Title" message={first_intro} />
      <RightInterlockedTextBoxes title="Second Title" message={second_intro} />
      <LeftInterlockedTextBoxes title="Third Title" message={third_intro} />
      <Speciality />
      <RightInterlockedTextBoxes title="Fourth Title" message={fourth_intro} />
    </div>
  );
}
export default BodyComponent;
