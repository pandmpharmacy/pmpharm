import React from "react";
import LandingHeader from "./LandingHeader";
import "./Compounding.css";
import Boxes from "./Boxes";

const imageMap = {
  RetailDiabeticSupply: {
    jpg: require("../src/images/RetailDiabeticSupply.jpg"),
    webp: require("../src/images/RetailDiabeticSupply.webp"),
  },
  RetailMedications: {
    jpg: require("../src/images/RetailMedications.jpg"),
    webp: require("../src/images/RetailMedications.webp"),
  },
  RetailFreeDelivery: {
    jpg: require("../src/images/RetailFreeDelivery.jpg"),
    webp: require("../src/images/RetailFreeDelivery.webp"),
  },
  CatDog: {
    jpg: require("../src/images/CatDog.jpg"),
    webp: require("../src/images/CatDog.webp"),
  },
  SmallCatDog: {
    jpg: require("../src/images/SmallCatDog.jpg"),
    webp: require("../src/images/SmallCatDog.webp"),
  },
  DogMan: {
    jpg: require("../src/images/DogMan.jpg"),
    webp: require("../src/images/DogMan.webp"),
  },
  ManCat: {
    jpg: require("../src/images/ManCat.jpg"),
    webp: require("../src/images/ManCat.webp"),
  },
  High5Cat: {
    jpg: require("../src/images/High5Cat.jpg"),
    webp: require("../src/images/High5Cat.webp"),
  },
  DogSyringe: {
    jpg: require("../src/images/DogSyringe.jpg"),
    webp: require("../src/images/DogSyringe.webp"),
  },
  PillsInHand: {
    jpg: require("../src/images/PillsInHand.jpg"),
    webp: require("../src/images/PillsInHand.webp"),
  },
  ComputerStethoscope: {
    jpg: require("../src/images/ComputerStethoscope.jpg"),
    webp: require("../src/images/ComputerStethoscope.webp"),
  },
  HandCream: {
    jpg: require("../src/images/HandCream.jpg"),
    webp: require("../src/images/HandCream.webp"),
  },
  HandDropper: {
    jpg: require("../src/images/HandDropper.jpg"),
    webp: require("../src/images/HandDropper.webp"),
  },
  PharmacistWithGel: {
    jpg: require("../src/images/PharmacistWithGel.jpg"),
    webp: require("../src/images/PharmacistWithGel.webp"),
  },
  WomanWithChild: {
    jpg: require("../src/images/WomanWithChild.jpg"),
    webp: require("../src/images/WomanWithChild.webp"),
  },
  CompoundPills: {
    jpg: require("../src/images/CompoundPills.jpeg"),
    webp: require("../src/images/CompoundPills.webp"),
  },
  PillMaking: {
    jpg: require("../src/images/PillMaking.jpeg"),
    webp: require("../src/images/PillMaking.webp"),
  },

  // Add more images as needed
};

function Compounding() {
    const pairedBoxData = [
      {
        title: "Free Delivery",
        text: "Convenient, free delivery within 3 miles.",
        imageSrc: "RetailFreeDelivery",      border_hex: "#c01313",
        title_hex: "#c01313",
      },
      {
        title: "Quick Retail Prescriptions",
        text: "Prescriptions filled in 5-10 mins.",
        LearnMore: "Call 210-660-8650 to transfer or refill.",
        imageSrc: "RetailMedications",      border_hex: "#c01313",
        title_hex: "#c01313",
      },
      {
        title: "Customized Compounded Prescriptions",
        text: "Tailored meds for unique needs.",
        imageSrc: "image3.jpg",      border_hex: "#c01313",
        title_hex: "#c01313",
      },
      {
        title: "Therapy Adherence Support",
        text: "Counseling to adhere to regimens.",
        imageSrc: "image4.jpg",      border_hex: "#c01313",
        title_hex: "#c01313",
      },
      {
        title: "Medication Synchronization",
        text: "Reduce hospitalization risk.",
        LearnMore: "Align medication refills.",
        imageSrc: "image5.jpg",      border_hex: "#c01313",
        title_hex: "#c01313",
      },
     
   
    // Add more data for additional boxes if needed
  ];

  return (
    <div className="compounding-container">
      {/* Compounding Section */}
      <div className="compounding-title-box">{/*  */}
        <LandingHeader title={"Retail Pharmacy"} />
        <p>Retail Pharmacy Short message goes here.</p>
      </div>
      <Boxes imageMap={imageMap} data={pairedBoxData} />
    </div>
  );
}

export default Compounding;
