import React from "react";
import "./LeftInterlockedTextBoxes.css"; // Import your CSS file

function LeftInterlockedTextBoxes({ message }) {
  return (
    <div className="interlocked-container">
      <div className="left-box box1">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default LeftInterlockedTextBoxes;
