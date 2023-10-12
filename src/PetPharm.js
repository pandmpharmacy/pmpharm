import React from "react";
/*import { useNavigate } from "react-router-dom";*/
/*import LeftInterlockedTextBoxes from "./LeftInterlockedTextBoxes";*/
import LandingHeader from "./LandingHeader";
import "./PetPharm.css"; // Import a CSS file for styling (create this file)
import Boxes from "./Boxes";

function PetPharm() {
  /*onst navigate = useNavigate();*/

  // Define an array to generate multiple instances of paired boxes
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
  const pairedBoxData = [
    {
      imageSrc: "image1.jpg", // Replace with actual image URLs
      title: "Free Delivery",
      text: "We offer convenient and free delivery services within a 3-mile radius of our pharmacy to ensure you receive your medications at your doorstep.",
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      imageSrc: "image2.jpg", // Replace with actual image URLs
      title: "Retail Prescriptions (quick and easy",
      text: "Experience hassle-free parking and have your prescriptions filled in just 5-10 minutes for your convenience.",
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      imageSrc: "image3.jpg",
      title: "Compounded Prescriptions (customized medications)",
      text: "Our expert pharmacists can tailor your medications to your unique needs through compounded prescriptions.n",
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      imageSrc: "image4.jpg",
      title: "Therapy Adherence",
      text: "Our services include counseling and support to help you adhere to your prescribed therapy regimens effectively.",
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      imageSrc: "image5.jpg",
      title: "Medication Synchronization (reduce hospitalization)",
      text: "Medication synchronization reduces the risk of hospitalization and the need for frequent pharmacy visits by aligning your medication refills.",
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      imageSrc: "image6.jpg",
      title: "Diabetic Supplies",
      text: "Find a comprehensive range of diabetic supplies to manage your diabetes effectively.",
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      imageSrc: "image7.jpg",
      title: "Orthopedic Supplies",
      text: "We offer a variety of orthopedic supplies to aid in your comfort and recovery.",
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      imageSrc: "image8.jpg",
      title: "Ostomy and Urinary Supplies",
      text: "We provide a selection of ostomy and urinary supplies to support your specific healthcare needs.",
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      imageSrc: "image9.jpg",
      title: "Nebulizers",
      text: "Explore our nebulizer options for respiratory treatments in the comfort of your home.",
      border_hex: "#169f0d",
      title_hex: "#169f0d",
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
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      imageSrc: "image12.jpg",
      title: "Support Stockings",
      text: "Discover support stockings to improve circulation and alleviate discomfort.",
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      imageSrc: "image13.jpg",
      title: "Daily Living Aids",
      text: "We offer a range of daily living aids to enhance your independence and quality of life.",
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },

    {
      imageSrc: "image14.jpg",
      title: "Incontinence Supplies",
      text: "Find incontinence supplies to ensure comfort and confidence.",
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      imageSrc: "image15.jpg",
      title: "Foot Care",
      text: "Explore our foot care products to maintain healthy and comfortable feet.",
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      imageSrc: "image16.jpg",
      title: "OTC (Vitamins, Skincare, Cough and Cold, etc",
      text: "Our pharmacy carries a diverse selection of over-the-counter products, including vitamins, skincare, and cough and cold remedies, for your health and wellness needs.",
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    // Add more data for additional boxes if needed
  ];

  return (
    <div className="pet-pharm-container">
      <div className="title-box">
        <LandingHeader title={"Pet Pharmacy"} />
        <p>Short message goes here.</p>
      </div>
      <Boxes imageMap={imageMap} data={pairedBoxData} />
    </div>
  );
}

export default PetPharm;
