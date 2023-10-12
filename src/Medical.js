import LandingHeader from "./LandingHeader";
import "./Medical.css";

import Boxes from "./Boxes";

// IMAGES
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

function Medical() {
  // DATA

  const pairedBoxData = [
    {
      title: "Customized Medications Tailored to Your Needs",
      text: "At P&M Pharmacy, we're not just a pharmacy; we're your trusted medical specialists serving Lake Worth, FL, and beyond. We understand that each patient is unique, and so are their medication needs. That's why we specialize in medical personalized prescriptions, ensuring you receive the treatment that suits you best.",
      imageSrc: "PharmacistAndLady",
      border_hex: "#c01313",
      title_hex: "#c01313",
      learnMore: [
        { 1: "Improved energy levels" },
        { 2: "Enhanced physiological well-being and mood" },
        { 3: "Reduced hot flashes" },
        { 4: "Improved sex drive" },
        { 5: "Relief from vaginal dryness" },
        { 6: "Enhanced erectile function" },
        { 7: "Reduced riskof osteoperosis" },
        { 8: "Effective management of menopausal symptoms" },
      ],
    },
    {
      title: "Insurance Coverage for medical Prescriptions",
      text: "Wondering if your insurance covers compounded prescriptions? It varies depending on your insurance plan. While very few insurance companies reimburse compounded prescriptions directly, patients may often seek reimbursement by submitting claim forms.",
      imageSrc: "ComputerStethoscope",
      border_hex: "#c01313",
      title_hex: "#c01313",
      learnMore: [
        { 1: "Improved energy levels" },
        { 2: "Enhanced physiological well-being and mood" },
        { 3: "Reduced hot flashes" },
        { 4: "Improved sex drive" },
        { 5: "Relief from vaginal dryness" },
        { 6: "Enhanced erectile function" },
        { 7: "Reduced riskof osteoperosis" },
        { 8: "Effective management of menopausal symptoms" },
      ],
    },
    {
      title: "Versatility in Compounded Prescriptions",
      text: "The versatility of compounded prescriptions is one of our strengths. We can compound almost any medication, meeting the specific requirements of patients who need customized treatments.",
      imageSrc: "HandCream", // Replace with actual image URLs
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Safety is Our Priority",
      text: "We prioritize your safety. The Food and Drug Administration recognizes the importance of pharmacy medical in providing crucial alternatives for patients requiring medications not commercially available or facing drug shortages. Safety measures include prescriptions written by licensed practitioners and medical by licensed pharmacists, along with compliance with state pharmacy board regulations.",
      imageSrc: "HandDropper", // Replace with actual image URLs
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "What Sets P&M Pharmacy Apart",
      text: "Why choose P&M Pharmacy over other specialty medical pharmacies? Learn More",
      imageSrc: "CompoundPills",
      border_hex: "#c01313",
      title_hex: "#c01313",
      learnMore: [
        { 1: "Improved energy levels" },
        { 2: "Enhanced physiological well-being and mood" },
        { 3: "Reduced hot flashes" },
        { 4: "Improved sex drive" },
        { 5: "Relief from vaginal dryness" },
        { 6: "Enhanced erectile function" },
        { 7: "Reduced riskof osteoperosis" },
        { 8: "Effective management of menopausal symptoms" },
      ],
    },
    {
      title: "Your Trusted medical Pharmacy",
      text: "Discover the difference at P&M Pharmacy. Whether you require Hormone Replacement Therapy (HRT), Veterinary medical, Dermatology, Sports Medicine, Podiatry, Wound Care, Pediatrics, or any other personalized medication, we're here to meet your needs.",
      imageSrc: "PharmacistWithGel", // Replace with actual image URLs
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Customized Dosage Forms",
      text: "We have decades of experience in medical and can create customized dosage forms to suit your preferences and needs. Whether you need a transdermal gel, topical spray, or cosmetically appealing cream, we have you covered.",
      imageSrc: "WomanWithChild", // Replace with actual image URLs
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Change, Combine, or Exclude Ingredients",
      text: "We can modify your medications in various ways, including changing the dosage form, altering the route of administration, creating combination preparations, and excluding specific ingredients to accommodate your unique circumstances.",
      imageSrc: "PillMaking",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    // Add more objects for additional boxes if needed
  ];

  return (
    <div className="medical_container">
      {/* medical Section */}
      <div className="medical-title-box">
        <LandingHeader title={"medical Pharmacy"} />
        <p>medical Short message goes here.</p>
      </div>
      <Boxes imageMap={imageMap} data={pairedBoxData} />
    </div>
  );
}

export default Medical;
