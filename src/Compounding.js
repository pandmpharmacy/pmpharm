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
    title: "Customized Medications Tailored to Your Needs",
    text: "At P&M Pharmacy, we're not just a pharmacy; we're your trusted compounding specialists serving Lake Worth, FL, and beyond. We understand that each patient is unique, and so are their medication needs. That's why we specialize in compounding personalized prescriptions, ensuring you receive the treatment that suits you best.",
    imageSrc: "image1.jpg", // Replace with actual image URLs
  },
  {
    title: "Insurance Coverage for Compounding Prescriptions",
    text: "Wondering if your insurance covers compounded prescriptions? It varies depending on your insurance plan. While very few insurance companies reimburse compounded prescriptions directly, patients may often seek reimbursement by submitting claim forms.",
    imageSrc: "image2.jpg", // Replace with actual image URLs
  },
  {
    title: "Compounded Prescriptions (customized medications)",
    text: "Our expert pharmacists can tailor your medications to your unique needs through compounded prescriptions.",
    imageSrc: "image3.jpg", // Replace with actual image URLs
  },
  {
    title: "Versatility in Compounded Prescriptions",
    text: "The versatility of compounded prescriptions is one of our strengths. We can compound almost any medication, meeting the specific requirements of patients who need customized treatments. Our delivery vehicles include: Creams, gels, and ointments",
    imageSrc: "image4.jpg", // Replace with actual image URLs
  },
  {
    title: "Medication Synchronization (reduce hospitalization)",
    text: "Medication synchronization reduces the risk of hospitalization and the need for frequent pharmacy visits by aligning your medication refills.",
    imageSrc: "image5.jpg", // Replace with actual image URLs
  },
  {
    title: "Diabetic Supplies",
    text: "Find a comprehensive range of diabetic supplies to manage your diabetes effectively.",
    imageSrc: "image6.jpg", // Replace with actual image URLs
  },
  {
    title: "Orthopedic Supplies",
    text: "We offer a variety of orthopedic supplies to aid in your comfort and recovery.",
    imageSrc: "image7.jpg", // Replace with actual image URLs
  },
  {
    title: "Ostomy and Urinary Supplies",
    text: "We provide a selection of ostomy and urinary supplies to support your specific healthcare needs.",
    imageSrc: "image8.jpg", // Replace with actual image URLs
  },
  {
    title: "Nebulizers",
    text: "Explore our nebulizer options for respiratory treatments in the comfort of your home.",
    imageSrc: "image9.jpg", // Replace with actual image URLs
  },
  {
    title: "Wound Care Supplies",
    text: "We stock a wide range of wound care supplies to facilitate wound healing and recovery.",
    imageSrc: "image10.jpg", // Replace with actual image URLs
  },
  {
    title: "Wound Care Supplies",
    text: "We stock a wide range of wound care supplies to facilitate wound healing and recovery.",
    imageSrc: "image11.jpg", // Replace with actual image URLs
  },
  {
    title: "Support Stockings",
    text: "Discover support stockings to improve circulation and alleviate discomfort.",
    imageSrc: "image12.jpg", // Replace with actual image URLs
  },
  {
    title: "Daily Living Aids",
    text: "We offer a range of daily living aids to enhance your independence and quality of life.",
    imageSrc: "image13.jpg", // Replace with actual image URLs
  },
  {
    title: "Incontinence Supplies",
    text: "Find incontinence supplies to ensure comfort and confidence.",
    imageSrc: "image14.jpg", // Replace with actual image URLs
  },
  {
    title: "Foot Care",
    text: "Explore our foot care products to maintain healthy and comfortable feet.",
    imageSrc: "image15.jpg", // Replace with actual image URLs
  },
  {
    title: "OTC (Vitamins, Skincare, Cough and Cold, etc",
    text: "Our pharmacy carries a diverse selection of over-the-counter products, including vitamins, skincare, and cough and cold remedies, for your health and wellness needs.",
    imageSrc: "image16.jpg", // Replace with actual image URLs
  }
  // Add more data for additional boxes if needed
];

// You can use the pairedBoxData array in your application as needed.


  return (
    <div className="compounding-container">
      <div className="compounding-title-box">
        <LandingHeader title={"Compounding Pharmacy"} />
        <p>Compounding Short message goes here.</p>
      </div>
      <div className="compounding-pair-boxes">
        <div className="box single-box" style={{ gridArea: "box1" }}>
          <h2>{pairedBoxData[0].title}</h2>
          <p>{pairedBoxData[0].text}</p>
          <img src={pairedBoxData[0].imageSrc} alt="Box 1" />
        </div>
        <div className="box" style={{ gridArea: "box2" }}>
          <h2>{pairedBoxData[1].title}</h2>
          <p>{pairedBoxData[1].text}</p>
          <img src={pairedBoxData[1].imageSrc} alt="Box 2" />
        </div>
        <div className="box" style={{ gridArea: "box3" }}>
          <h2>{pairedBoxData[2].title}</h2>
          <p>{pairedBoxData[2].text}</p>
          <img src={pairedBoxData[2].imageSrc} alt="Box 3" />
        </div>
        <div className="box" style={{ gridArea: "box4" }}>
          <h2>{pairedBoxData[3].title}</h2>
          <p>{pairedBoxData[3].text}</p>
          <img src={pairedBoxData[3].imageSrc} alt="Box 4" />
        </div>
        <div className="box" style={{ gridArea: "box5" }}>
          <h2>{pairedBoxData[4].title}</h2>
          <p>{pairedBoxData[4].text}</p>
          <img src={pairedBoxData[4].imageSrc} alt="Box 5" />
        </div>
        <div className="box" style={{ gridArea: "box6" }}>
          <h2>{pairedBoxData[5].title}</h2>
          <p>{pairedBoxData[5].text}</p>
          <img src={pairedBoxData[5].imageSrc} alt="Box 6" />
        </div>
        <div className="box" style={{ gridArea: "box7" }}>
          <h2>{pairedBoxData[6].title}</h2>
          <p>{pairedBoxData[6].text}</p>
          <img src={pairedBoxData[6].imageSrc} alt="Box 7" />
        </div>
        <div className="box" style={{ gridArea: "box8" }}>
          <h2>{pairedBoxData[7].title}</h2>
          <p>{pairedBoxData[7].text}</p>
          <img src={pairedBoxData[7].imageSrc} alt="Box 8" />
        </div>
        <div className="box" style={{ gridArea: "box9" }}>
          <h2>{pairedBoxData[8].title}</h2>
          <p>{pairedBoxData[8].text}</p>
          <img src={pairedBoxData[8].imageSrc} alt="Box 9" />
        </div>
        <div className="box" style={{ gridArea: "box10" }}>
          <h2>{pairedBoxData[9].title}</h2>
          <p>{pairedBoxData[9].text}</p>
          <img src={pairedBoxData[9].imageSrc} alt="Box 10" />
        </div>
        <div className="box" style={{ gridArea: "box11" }}>
          <h2>{pairedBoxData[10].title}</h2>
          <p>{pairedBoxData[10].text}</p>
          <img src={pairedBoxData[10].imageSrc} alt="Box 11" />
        </div>
        <div className="box" style={{ gridArea: "box12" }}>
          <h2>{pairedBoxData[11].title}</h2>
          <p>{pairedBoxData[11].text}</p>
          <img src={pairedBoxData[11].imageSrc} alt="Box 12" />
        </div>
        <div className="box" style={{ gridArea: "box13" }}>
          <h2>{pairedBoxData[12].title}</h2>
          <p>{pairedBoxData[12].text}</p>
          <img src={pairedBoxData[12].imageSrc} alt="Box 13" />
        </div>
        <div className="box" style={{ gridArea: "box14" }}>
          <h2>{pairedBoxData[13].title}</h2>
          <p>{pairedBoxData[13].text}</p>
          <img src={pairedBoxData[13].imageSrc} alt="Box 14" />
        </div>
        <div className="box" style={{ gridArea: "box15" }}>
          <h2>{pairedBoxData[14].title}</h2>
          <p>{pairedBoxData[14].text}</p>
          <img src={pairedBoxData[14].imageSrc} alt="Box 15" />
        </div>
        <div className="box" style={{ gridArea: "box16" }}>
          <h2>{pairedBoxData[15].title}</h2>
          <p>{pairedBoxData[15].text}</p>
          <img src={pairedBoxData[15].imageSrc} alt="Box 16" />
        </div>
      </div>

       
      <div className="compounding-title-box">
        <LandingHeader title={"Pet Compounding Pharmacy"} />
        <p>Compounding Short message goes here.</p>
      </div>
      <div className="compounding-pair-boxes">
        <div className="box single-box" style={{ gridArea: "box1" }}>
          <h2>{pairedBoxData[0].title}</h2>
          <p>{pairedBoxData[0].text}</p>
          <img src={pairedBoxData[0].imageSrc} alt="Box 1" />
        </div>
        <div className="box" style={{ gridArea: "box2" }}>
          <h2>{pairedBoxData[1].title}</h2>
          <p>{pairedBoxData[1].text}</p>
          <img src={pairedBoxData[1].imageSrc} alt="Box 2" />
        </div>
        <div className="box" style={{ gridArea: "box3" }}>
          <h2>{pairedBoxData[2].title}</h2>
          <p>{pairedBoxData[2].text}</p>
          <img src={pairedBoxData[2].imageSrc} alt="Box 3" />
        </div>
        <div className="box" style={{ gridArea: "box4" }}>
          <h2>{pairedBoxData[3].title}</h2>
          <p>{pairedBoxData[3].text}</p>
          <img src={pairedBoxData[3].imageSrc} alt="Box 4" />
        </div>
        <div className="box" style={{ gridArea: "box5" }}>
          <h2>{pairedBoxData[4].title}</h2>
          <p>{pairedBoxData[4].text}</p>
          <img src={pairedBoxData[4].imageSrc} alt="Box 5" />
        </div>
        <div className="box" style={{ gridArea: "box6" }}>
          <h2>{pairedBoxData[5].title}</h2>
          <p>{pairedBoxData[5].text}</p>
          <img src={pairedBoxData[5].imageSrc} alt="Box 6" />
        </div>
        <div className="box" style={{ gridArea: "box7" }}>
          <h2>{pairedBoxData[6].title}</h2>
          <p>{pairedBoxData[6].text}</p>
          <img src={pairedBoxData[6].imageSrc} alt="Box 7" />
        </div>
        <div className="box" style={{ gridArea: "box8" }}>
          <h2>{pairedBoxData[7].title}</h2>
          <p>{pairedBoxData[7].text}</p>
          <img src={pairedBoxData[7].imageSrc} alt="Box 8" />
        </div>
        <div className="box" style={{ gridArea: "box9" }}>
          <h2>{pairedBoxData[8].title}</h2>
          <p>{pairedBoxData[8].text}</p>
          <img src={pairedBoxData[8].imageSrc} alt="Box 9" />
        </div>
        <div className="box" style={{ gridArea: "box10" }}>
          <h2>{pairedBoxData[9].title}</h2>
          <p>{pairedBoxData[9].text}</p>
          <img src={pairedBoxData[9].imageSrc} alt="Box 10" />
        </div>
        <div className="box" style={{ gridArea: "box11" }}>
          <h2>{pairedBoxData[10].title}</h2>
          <p>{pairedBoxData[10].text}</p>
          <img src={pairedBoxData[10].imageSrc} alt="Box 11" />
        </div>
        <div className="box" style={{ gridArea: "box12" }}>
          <h2>{pairedBoxData[11].title}</h2>
          <p>{pairedBoxData[11].text}</p>
          <img src={pairedBoxData[11].imageSrc} alt="Box 12" />
        </div>
        <div className="box" style={{ gridArea: "box13" }}>
          <h2>{pairedBoxData[12].title}</h2>
          <p>{pairedBoxData[12].text}</p>
          <img src={pairedBoxData[12].imageSrc} alt="Box 13" />
        </div>
        <div className="box" style={{ gridArea: "box14" }}>
          <h2>{pairedBoxData[13].title}</h2>
          <p>{pairedBoxData[13].text}</p>
          <img src={pairedBoxData[13].imageSrc} alt="Box 14" />
        </div>
        <div className="box" style={{ gridArea: "box15" }}>
          <h2>{pairedBoxData[14].title}</h2>
          <p>{pairedBoxData[14].text}</p>
          <img src={pairedBoxData[14].imageSrc} alt="Box 15" />
        </div>
        <div className="box" style={{ gridArea: "box16" }}>
          <h2>{pairedBoxData[15].title}</h2>
          <p>{pairedBoxData[15].text}</p>
          <img src={pairedBoxData[15].imageSrc} alt="Box 16" />
        </div>
      </div>


      <div className="compounding-title-box">
        <LandingHeader title={"Human Compounding Pharmacy"} />
        <p>Human Compounding Short message goes here.</p>
      </div>
      <div className="compounding-pair-boxes">
        <div className="box single-box" style={{ gridArea: "box1" }}>
          <h2>{pairedBoxData[0].title}</h2>
          <p>{pairedBoxData[0].text}</p>
          <img src={pairedBoxData[0].imageSrc} alt="Box 1" />
        </div>
        <div className="box" style={{ gridArea: "box2" }}>
          <h2>{pairedBoxData[1].title}</h2>
          <p>{pairedBoxData[1].text}</p>
          <img src={pairedBoxData[1].imageSrc} alt="Box 2" />
        </div>
        <div className="box" style={{ gridArea: "box3" }}>
          <h2>{pairedBoxData[2].title}</h2>
          <p>{pairedBoxData[2].text}</p>
          <img src={pairedBoxData[2].imageSrc} alt="Box 3" />
        </div>
        <div className="box" style={{ gridArea: "box4" }}>
          <h2>{pairedBoxData[3].title}</h2>
          <p>{pairedBoxData[3].text}</p>
          <img src={pairedBoxData[3].imageSrc} alt="Box 4" />
        </div>
        <div className="box" style={{ gridArea: "box5" }}>
          <h2>{pairedBoxData[4].title}</h2>
          <p>{pairedBoxData[4].text}</p>
          <img src={pairedBoxData[4].imageSrc} alt="Box 5" />
        </div>
        <div className="box" style={{ gridArea: "box6" }}>
          <h2>{pairedBoxData[5].title}</h2>
          <p>{pairedBoxData[5].text}</p>
          <img src={pairedBoxData[5].imageSrc} alt="Box 6" />
        </div>
        <div className="box" style={{ gridArea: "box7" }}>
          <h2>{pairedBoxData[6].title}</h2>
          <p>{pairedBoxData[6].text}</p>
          <img src={pairedBoxData[6].imageSrc} alt="Box 7" />
        </div>
        <div className="box" style={{ gridArea: "box8" }}>
          <h2>{pairedBoxData[7].title}</h2>
          <p>{pairedBoxData[7].text}</p>
          <img src={pairedBoxData[7].imageSrc} alt="Box 8" />
        </div>
        <div className="box" style={{ gridArea: "box9" }}>
          <h2>{pairedBoxData[8].title}</h2>
          <p>{pairedBoxData[8].text}</p>
          <img src={pairedBoxData[8].imageSrc} alt="Box 9" />
        </div>
        <div className="box" style={{ gridArea: "box10" }}>
          <h2>{pairedBoxData[9].title}</h2>
          <p>{pairedBoxData[9].text}</p>
          <img src={pairedBoxData[9].imageSrc} alt="Box 10" />
        </div>
        <div className="box" style={{ gridArea: "box11" }}>
          <h2>{pairedBoxData[10].title}</h2>
          <p>{pairedBoxData[10].text}</p>
          <img src={pairedBoxData[10].imageSrc} alt="Box 11" />
        </div>
        <div className="box" style={{ gridArea: "box12" }}>
          <h2>{pairedBoxData[11].title}</h2>
          <p>{pairedBoxData[11].text}</p>
          <img src={pairedBoxData[11].imageSrc} alt="Box 12" />
        </div>
        <div className="box" style={{ gridArea: "box13" }}>
          <h2>{pairedBoxData[12].title}</h2>
          <p>{pairedBoxData[12].text}</p>
          <img src={pairedBoxData[12].imageSrc} alt="Box 13" />
        </div>
        <div className="box" style={{ gridArea: "box14" }}>
          <h2>{pairedBoxData[13].title}</h2>
          <p>{pairedBoxData[13].text}</p>
          <img src={pairedBoxData[13].imageSrc} alt="Box 14" />
        </div>
        <div className="box" style={{ gridArea: "box15" }}>
          <h2>{pairedBoxData[14].title}</h2>
          <p>{pairedBoxData[14].text}</p>
          <img src={pairedBoxData[14].imageSrc} alt="Box 15" />
        </div>
        <div className="box" style={{ gridArea: "box16" }}>
          <h2>{pairedBoxData[15].title}</h2>
          <p>{pairedBoxData[15].text}</p>
          <img src={pairedBoxData[15].imageSrc} alt="Box 16" />
        </div>
      </div>
    </div>
  );
}

export default Compounding;
