import React, { useRef, useEffect } from "react";
import Boxes from "./Boxes";
import LandingHeader from "./LandingHeader";
import "./PetPharm.css";

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

// Pet Retail Pharmacy Data  
const pairedBoxData = [
  {
    title: "Pet Prescription Medications",
    text: "We offer a wide range of famous pet prescription medications, including brands like 'Simparica', 'Revolution', and 'Hill's Prescription Diet'.",
    LearnMore: [
      { 1: "Explore our famous pet prescription products" }
    ],
    imageSrc: "PetPrescriptionMedicationsImage",
  },
  {
    title: "Pet Prescription Refills",
    text: "Quick and easy prescription refills for your pet's health.",
    LearnMore: [
      { 1: "Easily refill your pet's prescriptions" }
    ],
    imageSrc: "PetPrescriptionRefillsImage",
  },
  {
    title: "Pet Care Supplies",
    text: "Find everything you need to care for your pets, from food to accessories.",
    LearnMore: [
      { 1: "Discover our range of pet care supplies" }
    ],
    imageSrc: "PetCareSuppliesImage",
  },
  {
    title: "Vet Partnerships",
    text: "We're partnering with local vet locations for your pet's healthcare needs.",
    LearnMore: [
      { 1: "Learn about our vet partnerships" }
    ],
    imageSrc: "VetPartnershipsImage",
  },
  // Add more data for additional boxes if needed
];


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
