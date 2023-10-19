import React from "react";
import Boxes from "./Boxes";
import LandingHeader from "./LandingHeader";
import "./Compounding.css";

const imageMap = {
  vaccinationServices: {
    jpeg: require("../src/images/ImmunizationImages/vaccinationServices.jpeg"),
    webp: require("../src/images/ImmunizationImages/vaccinationServices.webp"),
  },
  immunizationSchedule: {
    jpeg: require("../src/images/ImmunizationImages/immunizationSchedule.jpeg"),
    webp: require("../src/images/ImmunizationImages/immunizationSchedule.webp"),
  },
  fluShots: {
    webp: require("../src/images/ImmunizationImages/fluShots.webp"),
  },
  vaccinesForChildren: {
    jpg: require("../src/images/ImmunizationImages/vaccinesForChildren.jpg"),
    webp: require("../src/images/ImmunizationImages/vaccinesForChildren.webp"),
  },
  travelVaccinations: {
    jpg: require("../src/images/ImmunizationImages/travelVaccinations.jpeg"),
    webp: require("../src/images/ImmunizationImages/travelVaccinations.webp"),
  },
  adultImmunization: {
    jpeg: require("../src/images/ImmunizationImages/adultImmunization.jpeg"),
    webp: require("../src/images/ImmunizationImages/adultImmunization.webp"),
  },
  

  // Add more images as needed
};

function Immunization() {
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
      imageSrc: "vaccinationServices",
    },
    {
      title: "Immunization Schedule",
      text: "Stay on track with recommended immunization schedules.",
      LearnMore: [
        { 1: "Learn about our immunization schedules" }
      ],
      imageSrc: "immunizationSchedule",
    },
    {
      title: "Flu Shots",
      text: "Annual flu vaccinations to keep you and your family protected.",
      LearnMore: [
        { 1: "Get your flu shot today" }
      ],
      imageSrc: "fluShots",
    },
    {
      title: "Travel Vaccinations",
      text: "Stay safe while traveling with necessary vaccinations.",
      LearnMore: [
        { 1: "Explore our travel vaccination services" }
      ],
      imageSrc: "travelVaccinations",
    },
    {
      title: "Childhood Immunizations",
      text: "Protect your child's health with essential childhood vaccinations.",
      LearnMore: [
        { 1: "Learn about childhood immunizations" }
      ],
      imageSrc: "vaccinesForChildren",
    },
    {
      title: "Adult Immunizations",
      text: "Keep yourself up-to-date with adult immunizations.",
      LearnMore: [
        { 1: "Explore adult immunization options" }
      ],
      imageSrc: "adultImmunization",
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

export default Immunization;
