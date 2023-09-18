import React from "react";
import "./RightInterlockedTextBoxes.css"; // Import your CSS file

function RightInterlockedTextBoxes({ title, message }) {
  return (
    <div className="interlocked-container">
      <div className="right-box box2">
      <h2 className="box-title">{title}</h2> {/* Add the "box-title" class */}
        <p>{message}</p>
      </div>
    </div>
  );
}

export default RightInterlockedTextBoxes;
