import React from "react";
import "./LeftInterlockedTextBoxes.css";

function LeftInterlockedTextBoxes({ title, message }) {
  return (
    <div className="interlocked-container">
      <div className="left-box box1">
        <h2 className="box-title">{title}</h2> {/* Add the "box-title" class */}
        <p>{message}</p>
      </div>
    </div>
  );
}

export default LeftInterlockedTextBoxes;
