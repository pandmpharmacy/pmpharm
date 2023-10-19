import React, { useRef, useEffect } from "react";
import Boxes from "./Boxes";
import LandingHeader from "./LandingHeader";
import "./PetPharm.css";

const imageMap = {
  petMedications: {
    webp: require("../src/images/PetPharmacyImages/petMedications.webp"),
  },
  vetPartnerships: {
    jpg: require("../src/images/PetPharmacyImages/vetPartnerships.jpg"),
    webp: require("../src/images/PetPharmacyImages/vetPartnerships.webp"),
  },
  petRefills: {
    jpg: require("../src/images/PetPharmacyImages/coolDog.jpg"),
    webp: require("../src/images/PetPharmacyImages/coolDog.webp"),
  },
  petSupplies: {
    jpg: require("../src/images/PetPharmacyImages/kittenToy.jpg"),
    webp: require("../src/images/PetPharmacyImages/kittenToy.webp"),
  },

  // Add more images as needed
};

// Pet Retail Pharmacy Data  
const pairedBoxData = [
  {
    title: "Pet Prescription Medications",
    text: "We offer a wide range of pet prescription medications such as Simparica, Revolution and Hill's Prescription Diet.",
    imageSrc: "petMedications",
  },
  {
    title: "Vet Partnerships",
    text: "We're partnering with local vet locations for your pet's healthcare needs.",
    LearnMore: [
      { 1: "Learn about our vet partnerships" }
    ],
    imageSrc: "vetPartnerships",
  },
  {
    title: "Pet Care Supplies",
    text: "Find everything you need to care for your pets, from food to accessories.",
    imageSrc: "petSupplies",
  },
  {
    title: "Pet Prescription Refills",
    text: "Quick and easy prescription refills for your pet's health.",
    imageSrc: "petRefills",
  },
  
  
  // Add more data for additional boxes if needed
];

function Compounding() {
  const dermatologyRef = useRef(null);
  const petRef = useRef(null);
  // ... other refs for other sections

  useEffect(() => {
    const hash = window.location.hash;
    const offsetAmount = 120; // You can adjust this value based on your needs

    // if (hash === "#compoundingDerm-title-box" && dermatologyRef.current) {
    //   dermatologyRef.current.scrollIntoView({ behavior: "smooth" });
    // }
    if (hash === "#compoundingDerm-title-box" && dermatologyRef.current) {
      const topPosition =
        dermatologyRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        offsetAmount;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
    if (hash === "#compoundingPet-title-box" && petRef.current) {
      const topPosition =
        petRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        offsetAmount;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
   
  }, []);

  
  return (
    <div className="compounding-container">
      {/* Compounding Section */}
      <div className="compounding-title-box">
        <LandingHeader title={"Pet Retail Pharmacy"} />
        <p>Your Trusted Source for Pet Health and Wellness.</p>
      </div>
      <Boxes imageMap={imageMap} data={pairedBoxData} /> 
    </div>
  );
}

export default Compounding;
