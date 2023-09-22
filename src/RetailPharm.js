import React from "react";
/*import { useNavigate } from "react-router-dom";*/
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
    {
      imageSrc: "image6.jpg",
      title: "Box 6 Title",
      text: "Box 6 Description",
    },
    {
      imageSrc: "image7.jpg",
      title: "Box 7 Title",
      text: "Box 7 Description",
    },
    {
      imageSrc: "image8.jpg",
      title: "Box 8 Title",
      text: "Box 8 Description",
    },
    {
      imageSrc: "image9.jpg",
      title: "Box 9 Title",
      text: "Box 9 Description",
    },
    {
      imageSrc: "image10.jpg",
      title: "Box 10 Title",
      text: "Box 10 Description",
    }
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
        <div className="box" style={{ gridArea: "box6" }}>
          <img src={pairedBoxData[5].imageSrc} alt="Box 6" />
          <h2>{pairedBoxData[5].title}</h2>
          <p>{pairedBoxData[5].text}</p>
        </div>
        <div className="box" style={{ gridArea: "box7" }}>
          <img src={pairedBoxData[6].imageSrc} alt="Box 7" />
          <h2>{pairedBoxData[6].title}</h2>
          <p>{pairedBoxData[6].text}</p>
        </div>
        <div className="box" style={{ gridArea: "box8" }}>
          <img src={pairedBoxData[7].imageSrc} alt="Box 8" />
          <h2>{pairedBoxData[7].title}</h2>
          <p>{pairedBoxData[7].text}</p>
        </div>
        <div className="box" style={{ gridArea: "box9" }}>
          <img src={pairedBoxData[8].imageSrc} alt="Box 9" />
          <h2>{pairedBoxData[8].title}</h2>
          <p>{pairedBoxData[8].text}</p>
        </div>
        <div className="box" style={{ gridArea: "box10" }}>
          <img src={pairedBoxData[9].imageSrc} alt="Box 10" />
          <h2>{pairedBoxData[9].title}</h2>
          <p>{pairedBoxData[9].text}</p>
        </div>
      </div>
    </div>
  );
}

export default RetailPharm;
