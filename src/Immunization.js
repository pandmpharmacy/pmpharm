import React from "react";
import Boxes from "./Boxes";
import LandingHeader from "./LandingHeader";
import "./Compounding.css";

const imageMap = {
  PharmacistAndLady: {
    jpg: require("../src/images/PharmacistAndLady.jpg"),
    webp: require("../src/images/PharmacistAndLady.webp"),
  },
  SurprisedCat: {
    jpg: require("../src/images/SurprisedCat.jpg"),
    webp: require("../src/images/SurprisedCat.webp"),
  },
  DogWoman: {
    jpg: require("../src/images/DogWoman.jpg"),
    webp: require("../src/images/DogWoman.webp"),
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
  // const [activeBox, setActiveBox] = useState(null);

  /*const toggleBoxContent = (index) => {
        if (activeBox === index) {
            setActiveBox(null);
        } else {
            setActiveBox(index);
        }
    };*/

  // Rest of your code...

  const pairedBoxData = [
    {
      title: "Vaccines you need",
      text: "At P&M Pharmacy, we carry vaccines like Flu, COVID-19, Shingles, pneumonia (pneumococcal), Hepatitis B and more",
      imageSrc: "image1.jpg", // Replace with actual image URLs
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Retail Prescriptions (quick and easy)",
      text: "Experience hassle-free parking and have your prescriptions filled in just 5-10 minutes for your convenience.",
      imageSrc: "image2.jpg", // Replace with actual image URLs
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Compounded Prescriptions (customized medications)",
      text: "Our expert pharmacists can tailor your medications to your unique needs through compounded prescriptions.n",
      imageSrc: "image3.jpg",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Therapy Adherence",
      text: "Our services include counseling and support to help you adhere to your prescribed therapy regimens effectively.",
      imageSrc: "image4.jpg",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Medication Synchronization (reduce hospitalization)",
      text: "Medication synchronization reduces the risk of hospitalization and the need for frequent pharmacy visits by aligning your medication refills.",
      imageSrc: "image5.jpg",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Diabetic Supplies",
      text: "Find a comprehensive range of diabetic supplies to manage your diabetes effectively.",
      imageSrc: "image6.jpg",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Orthopedic Supplies",
      text: "We offer a variety of orthopedic supplies to aid in your comfort and recovery.",
      imageSrc: "image7.jpg",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Ostomy and Urinary Supplies",
      text: "We provide a selection of ostomy and urinary supplies to support your specific healthcare needs.",
      imageSrc: "image8.jpg",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Nebulizers",
      text: "Explore our nebulizer options for respiratory treatments in the comfort of your home.",
      imageSrc: "image9.jpg",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Wound Care Supplies",
      text: "We stock a wide range of wound care supplies to facilitate wound healing and recovery.",
      imageSrc: "image10.jpg",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Wound Care Supplies",
      text: "We stock a wide range of wound care supplies to facilitate wound healing and recovery.",
      imageSrc: "image11.jpg",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Support Stockings",
      text: "Discover support stockings to improve circulation and alleviate discomfort.",
      imageSrc: "image12.jpg",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },

    {
      title: "Daily Living Aids",
      text: "We offer a range of daily living aids to enhance your independence and quality of life.",
      imageSrc: "image13.jpg",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Incontinence Supplies",
      text: "Find incontinence supplies to ensure comfort and confidence.",
      imageSrc: "image14.jpg",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Foot Care",
      text: "Explore our foot care products to maintain healthy and comfortable feet.",
      imageSrc: "image15.jpg",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "OTC (Vitamins, Skincare, Cough and Cold, etc)",
      text: "Our pharmacy carries a diverse selection of over-the-counter products, including vitamins, skincare, and cough and cold remedies, for your health and wellness needs.",
      imageSrc: "image16.jpg",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    // Add more data for additional boxes if needed
  ];

  return (
    <div className="compounding-container">
      {/* Compounding Section */}
      <div className="compounding-title-box">
        <LandingHeader title={"Immunization"} />
        <p>Immunization Short message goes here.</p>
      </div>
      <Boxes imageMap={imageMap} data={pairedBoxData} />
    </div>
  );
}

export default Compounding;
