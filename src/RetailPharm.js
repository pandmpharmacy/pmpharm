import React from "react";
import { useNavigate } from "react-router-dom";
/*import LeftInterlockedTextBoxes from "./LeftInterlockedTextBoxes";*/
import LandingHeader from "./LandingHeader";
import "./RetailPharm.css"; // Import a CSS file for styling (create this file)

function RetailPharm() {
  /*onst navigate = useNavigate();*/

  // Define an array to generate multiple instances of paired boxes
  const pairedBoxData = [
    {
      imageSrc: "image1.jpg", // Replace with actual image URLs
      title: "Box 1 Title",
      text: "Box 1 Description",
    },
    {
      imageSrc: "image2.jpg", // Replace with actual image URLs
      title: "Box 2 Title",
      text: "Box 2 Description",
    },
    {
      imageSrc: "image3.jpg",
      title: "Box 3 Title",
      text: "Box 3 Description",
    },
    {
      imageSrc: "image4.jpg",
      title: "Box 4 Title",
      text: "Box 4 Description",
    },
    {
      imageSrc: "image5.jpg",
      title: "Box 5 Title",
      text: "Box 5 Description",
    },
    // Add more data for additional boxes if needed
  ];

  return (
    <div className="retail-pharm-container">
      <div className="title-box">
        <LandingHeader title={"Retail Pharmacy"} />
        <p>Short message goes here.</p>
      </div>
      <div className="pair-boxes">
        <div className="box single-box" style={{ gridArea: "box1" }}>
          <img src={pairedBoxData[0].imageSrc} alt="Box 1" />
          <h2>{pairedBoxData[0].title}</h2>
          <p>{pairedBoxData[0].text}</p>
        </div>
        <div className="box" style={{ gridArea: "box2" }}>
          <img src={pairedBoxData[1].imageSrc} alt="Box 2" />
          <h2>{pairedBoxData[1].title}</h2>
          <p>{pairedBoxData[1].text}</p>
        </div>
        <div className="box" style={{ gridArea: "box3" }}>
          <img src={pairedBoxData[2].imageSrc} alt="Box 3" />
          <h2>{pairedBoxData[2].title}</h2>
          <p>{pairedBoxData[2].text}</p>
        </div>
        <div className="box" style={{ gridArea: "box4" }}>
          <img src={pairedBoxData[3].imageSrc} alt="Box 4" />
          <h2>{pairedBoxData[3].title}</h2>
          <p>{pairedBoxData[3].text}</p>
        </div>
        <div className="box" style={{ gridArea: "box5" }}>
          <img src={pairedBoxData[4].imageSrc} alt="Box 5" />
          <h2>{pairedBoxData[4].title}</h2>
          <p>{pairedBoxData[4].text}</p>
        </div>
      </div>
    </div>
  );
}

export default RetailPharm;
