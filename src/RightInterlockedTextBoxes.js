import React from 'react';
import './RightInterlockedTextBoxes.css'; // Import your CSS file

function RightInterlockedTextBoxes() {
  return (
    <div className="interlocked-container">
      <div className="box box2">
        <p>This is text box 2.</p>
      </div>
      <div className="box box1">
        <p>This is text box 1.</p>
      </div>
    </div>
  );
}

export default RightInterlockedTextBoxes;
