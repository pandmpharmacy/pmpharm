import React from "react";
import "./RightInterlockedTextBoxes.css"; // Import your CSS file

function RightInterlockedTextBoxes({ message }) {
  return (
    <div className="left-interlocked-container">
      <div className="right-box box2">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default RightInterlockedTextBoxes;
