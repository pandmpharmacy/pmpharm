import React from "react";
/*import { useNavigate } from "react-router-dom";*/
/*import LeftInterlockedTextBoxes from "./LeftInterlockedTextBoxes";*/
import LandingHeader from "./LandingHeader";
import "./Compounding.css"; // Import a CSS file for styling (create this file)

function Compounding() {
  /*onst navigate = useNavigate();*/

  // Define an array to generate multiple instances of paired boxes
  const pairedBoxData = [
    {
      imageSrc: "image1.jpg", // Replace with actual image URLs
      title: "Compounding Free Deliveryy",
      text: "We offer convenient and free delivery services within a 3-mile radius of our pharmacy to ensure you receive your medications at your doorstep.",
    },
    {
      imageSrc: "image2.jpg", // Replace with actual image URLs
      title: "Retail Prescriptions (quick and easy",
      text: "Experience hassle-free parking and have your prescriptions filled in just 5-10 minutes for your convenience.",
    },
    {
      imageSrc: "image3.jpg",
      title: "Compounded Prescriptions (customized medications)",
      text: "Our expert pharmacists can tailor your medications to your unique needs through compounded prescriptions.n",
    },
    {
      imageSrc: "image4.jpg",
      title: "Therapy Adherence",
      text: "Our services include counseling and support to help you adhere to your prescribed therapy regimens effectively.",
    },
    {
      imageSrc: "image5.jpg",
      title: "Medication Synchronization (reduce hospitalization)",
      text: "Medication synchronization reduces the risk of hospitalization and the need for frequent pharmacy visits by aligning your medication refills.",
    },
    {
      imageSrc: "image6.jpg",
      title: "Diabetic Supplies",
      text: "Find a comprehensive range of diabetic supplies to manage your diabetes effectively.",
    },
    {
      imageSrc: "image7.jpg",
      title: "Orthopedic Supplies",
      text: "We offer a variety of orthopedic supplies to aid in your comfort and recovery.",
    },
    {
      imageSrc: "image8.jpg",
      title: "Ostomy and Urinary Supplies",
      text: "We provide a selection of ostomy and urinary supplies to support your specific healthcare needs.",
    },
    {
      imageSrc: "image9.jpg",
      title: "Nebulizers",
      text: "Explore our nebulizer options for respiratory treatments in the comfort of your home.",
    },
    {
      imageSrc: "image10.jpg",
      title: "Wound Care Supplies",
      text: "We stock a wide range of wound care supplies to facilitate wound healing and recovery.",
    },
    {
      imageSrc: "image11.jpg",
      title: "Wound Care Supplies",
      text: "We stock a wide range of wound care supplies to facilitate wound healing and recovery.",
    },
    {
      imageSrc: "image12.jpg",
      title: "Support Stockings",
      text: "Discover support stockings to improve circulation and alleviate discomfort.",
    },
    {
      imageSrc: "image13.jpg",
      title: "Daily Living Aids",
      text: "We offer a range of daily living aids to enhance your independence and quality of life.",
    },
    {
      imageSrc: "image14.jpg",
      title: "Incontinence Supplies",
      text: "Find incontinence supplies to ensure comfort and confidence.",
    },
    {
      imageSrc: "image15.jpg",
      title: "Foot Care",
      text: "Explore our foot care products to maintain healthy and comfortable feet.",
    },
    {
      imageSrc: "image16.jpg",
      title: "OTC (Vitamins, Skincare, Cough and Cold, etc",
      text: "Our pharmacy carries a diverse selection of over-the-counter products, including vitamins, skincare, and cough and cold remedies, for your health and wellness needs.",
    }
    // Add more data for additional boxes if needed
  ];

  return (
    <div className="compounding-container">
      <div className="compounding-title-box">
        <LandingHeader title={"Compounding Pharmacy"} />
        <p>Compounding Short message goes here.</p>
      </div>
      <div className="compounding-pair-boxes">
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
        <div className="box" style={{ gridArea: "box11" }}>
          <img src={pairedBoxData[10].imageSrc} alt="Box 11" />
          <h2>{pairedBoxData[10].title}</h2>
          <p>{pairedBoxData[10].text}</p>
        </div>
        <div className="box" style={{ gridArea: "box12" }}>
          <img src={pairedBoxData[11].imageSrc} alt="Box 12" />
          <h2>{pairedBoxData[11].title}</h2>
          <p>{pairedBoxData[11].text}</p>
        </div>
        <div className="box" style={{ gridArea: "box13" }}>
          <img src={pairedBoxData[12].imageSrc} alt="Box 13" />
          <h2>{pairedBoxData[12].title}</h2>
          <p>{pairedBoxData[12].text}</p>
        </div>
        <div className="box" style={{ gridArea: "box14" }}>
          <img src={pairedBoxData[13].imageSrc} alt="Box 14" />
          <h2>{pairedBoxData[13].title}</h2>
          <p>{pairedBoxData[13].text}</p>
        </div>
        <div className="box" style={{ gridArea: "box15" }}>
          <img src={pairedBoxData[14].imageSrc} alt="Box 15" />
          <h2>{pairedBoxData[14].title}</h2>
          <p>{pairedBoxData[14].text}</p>
        </div>
        <div className="box" style={{ gridArea: "box16" }}>
          <img src={pairedBoxData[15].imageSrc} alt="Box 16" />
          <h2>{pairedBoxData[15].title}</h2>
          <p>{pairedBoxData[15].text}</p>
        </div>
      </div>
    </div>
  );
}

export default Compounding;
