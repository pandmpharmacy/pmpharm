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
      title: "Vaccination Services",
      text: "Comprehensive vaccination programs for all ages.",
      LearnMore: [
        { 1: "Explore our vaccination services" }
      ],
      imageSrc: "VaccinationImage",
    },
    {
      title: "Immunization Schedule",
      text: "Stay on track with recommended immunization schedules.",
      LearnMore: [
        { 1: "Learn about our immunization schedules" }
      ],
      imageSrc: "ImmunizationScheduleImage",
    },
    {
      title: "Flu Shots",
      text: "Annual flu vaccinations to keep you and your family protected.",
      LearnMore: [
        { 1: "Get your flu shot today" }
      ],
      imageSrc: "FluShotsImage",
    },
    {
      title: "Travel Vaccinations",
      text: "Stay safe while traveling with necessary vaccinations.",
      LearnMore: [
        { 1: "Explore our travel vaccination services" }
      ],
      imageSrc: "TravelVaccinationsImage",
    },
    {
      title: "Childhood Immunizations",
      text: "Protect your child's health with essential childhood vaccinations.",
      LearnMore: [
        { 1: "Learn about childhood immunizations" }
      ],
      imageSrc: "ChildhoodImmunizationsImage",
    },
    {
      title: "Adult Immunizations",
      text: "Keep yourself up-to-date with adult immunizations.",
      LearnMore: [
        { 1: "Explore adult immunization options" }
      ],
      imageSrc: "AdultImmunizationsImage",
    },
    // Add more data for additional boxes if needed
  ];

  return (
    <div className="compounding-container">
      {/* Compounding Section */}
      <div className="compounding-title-box">
        <LandingHeader title={"Immunization"} />
        <p>Protecting Your Health, One Shot at a Time.</p>
      </div>
      <Boxes imageMap={imageMap} data={pairedBoxData} />
    </div>
  );
}

export default Compounding;
