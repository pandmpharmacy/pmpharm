import React, { useRef, useEffect } from "react";
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
  const dermatologyRef = useRef(null);
  const petRef = useRef(null);
  const HRTReft = useRef(null);
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
    if (hash === "#compoundingHRT-title-box" && HRTReft.current) {
      const topPosition =
        HRTReft.current.getBoundingClientRect().top +
        window.pageYOffset -
        offsetAmount;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  }, []);

// Compounding Data  
  const pairedBoxData = [
    {
      title: "Customized Medications Tailored to Your Needs",
      text: "We personalize prescriptions to meet unique medication needs.",
      imageSrc: "PharmacistAndLady", // Use the image key from the imageMap,
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Insurance Coverage for Compounding Prescriptions",
      text: "Check your insurance coverage for compounded prescriptions",
      imageSrc: "ComputerStethoscope",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Versatility in Compounded Prescriptions",
      text: "We excel in compounding almost any medication.",
      imageSrc: "HandCream", // Replace with actual image URLs
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Safety is Our Priority",
      text: "Safety is our priority in compounding medications",
      imageSrc: "HandDropper", // Replace with actual image URLs
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "What Sets P&M Pharmacy Apart",
      text:  "Discover what makes us stand out. Learn More.",
      imageSrc: "CompoundPills",
      border_hex: "#c01313",
      title_hex: "#c01313",
    },
    {
      title: "Your Trusted Compounding Pharmacy",
      text: "Trust us for various personalized medications.",
      imageSrc: "PharmacistWithGel", // Replace with actual image URLs
      border_hex: "#c01313",
      title_hex: "#c01313",
      learnMore: [
        { 1: "Hormone Replacement Therapy (HRT)" },
        { 2: "Veterinary Compounding" },
        { 3: "Dermatology" },
        { 4: "Sports medication" },
        { 5: "podiatry" },
        { 6: "Woundcare" },
        { 7: "Pediatrics" },
        { 8: "Any other personalized medication" },
      ],
    },
    {
      title: "Customized Dosage Forms",
      text: "Customized dosage forms tailored to your needs.",
      imageSrc: "WomanWithChild", // Replace with actual image URLs
      border_hex: "#c01313",
      title_hex: "#c01313",
      learnMore: [
        { 1: "Transdermal Gel" },
        { 2: "Topical Spray" },
        { 3: "Cosmetically appealing creams" },
      ],
    },
    {
      title: "Change, Combine, or Exclude Ingredients",
      text: "We adapt medications to suit your unique needs.",
      imageSrc: "PillMaking",
      border_hex: "#c01313",
      title_hex: "#c01313",
      learnMore: [
        { 1: "Changing the dosage form" },
        { 2: "Altering the route of administration" },
        { 3: "Creating combination preparations" },
        { 4: "Excluding specific ingredients to accomodate your unique needs"}
      ],
    },
    // Add more objects for additional boxes if needed
  ];


  const PetpairedBoxData = [
    {
      title: "Tailored Pet Medications",
      text: "Customized medications for your unique pets. Flavored options and personalized doses for happy, healthy pets.",
      border_hex: "#3f1fc1",
      title_hex: "#3f1fc1",
    },
    {
      title: "Ease of Medication",
      text: "Administering pet meds made easy with our delicious flavors. From tuna to tutti frutti, your pet will love it!",
      imageSrc: "DogWoman", // Replace with actual image URLs
      border_hex: "#3f1fc1",
      title_hex: "#3f1fc1",
    },
    {
      title: "Perfect Pet Dosing",
      text: "Tailored medications in the right size, strength, and form. Chewables, ear drops, and more for your pet's needs.",
      border_hex: "#3f1fc1",
      title_hex: "#3f1fc1",
    },
    {
      title: "Stress-Free Medication",
      text: "Transdermal meds for pets with conditions like hypertension. No more medication struggles for pet owners.",
      imageSrc: "High5Cat", // Replace with actual image URLs
      border_hex: "#3f1fc1",
      title_hex: "#3f1fc1",
    },
    {
      title: "Reliable Pet Solutions",
      text: "We bridge the gap when specific medications are unavailable. Personalized forms using pharmaceutical-grade ingredients.",
      imageSrc: "ManCat", // Replace with actual image URLs
      border_hex: "#3f1fc1",
      title_hex: "#3f1fc1",
    },
    {
      title: "Comprehensive Pet Care",
      text: "Combine multiple medications into a single, easy-to-use formulation. Medicated treats with multiple drugs for convenience.",
      imageSrc: "DogSyringe", // Replace with actual image URLs
      border_hex: "#3f1fc1",
      title_hex: "#3f1fc1",
    },
    {
      title: "Your Trusted Pet Pharmacy",
      text: "Contact us for personalized pet care. Your pets' well-being is our top priority!",
      imageSrc: "DogMan", // Replace with actual image URLs
      border_hex: "#3f1fc1",
      title_hex: "#3f1fc1",
    },
    // Add more objects for additional boxes if needed
  ];
  

// Dermatology Compounding Data  
const PeopleDermpairedBoxData = [
  {
    title: "Custom Dermatology Solutions",
    text: "Personalized skin care at P&M Pharmacy. Expert pharmacists offer tailored dermatological medications for your skin's health.",
    learnMore: [
      { 1: "We Address skin conditions" },
      { 2: "Customize formulations for therapy" },
      { 3: "Comprehensive solutions for your skin" },
    ],
    border_hex: "#E48514",
    title_hex: "#E48514",
  },
  {
    title: "Skin Conditions We Treat",
    text: "We address eczema, acne, aging concerns, and more. Trust us for comprehensive dermatology solutions.",
    border_hex: "#E48514",
    title_hex: "#E48514",
  },
  {
    title: "Compounded Medication Examples",
    text: "Explore custom skincare and specialized dermatology solutions.",
    learnMore: [
      { 1: "Skincare creams" },
      { 2: "Topical sprays and powders" },
      { 3: "Oral Forms" },
      { 4: "And many more"}
    ],
    border_hex: "#E48514",
    title_hex: "#E48514",
  },
  {
    title: "Experience Personalized Skin Care",
    text: "Trust P&M Pharmacy for personalized skin care. Your skin's health is our priority!",
    border_hex: "#E48514",
    title_hex: "#E48514",
  },
    // Add more objects for additional boxes if needed
  ];

  const PeopleHRTpairedBoxData = [
    {
      title: "Hormonal Balance Solutions",
      text: "Find affordable Hormone Replacement Therapy (HRT) at P&M Pharmacy. Achieve hormonal balance and well-being with trusted HRT services.",
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      title: "Understanding Hormones",
      text: "Hormones are vital for mood, metabolism, reproduction, and more. Balanced hormones mean optimal body function.",
      imageSrc: "image2.jpg", // Replace with actual image URLs
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      title: "Types of Hormones We Address",
      text: "Our HRT services cover a range of hormones. Learn More: Estrogens, Progesterone, Testosterone, DHEA, Bi-Est (Estriol + Estradiol).",
      imageSrc: "image3.jpg", // Replace with actual image URLs
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      title: "Manage Hormone Imbalance",
      text: "Hormonal imbalances affect people of all ages. Women may experience menopausal symptoms, while men face Andropause. We can help.",
      imageSrc: "image5.jpg", // Replace with actual image URLs
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      title: "Restore Hormonal Balance",
      text: "Don't let imbalances disrupt your life. Our Hormone Replacement Therapy (HRT) can restore balance. We offer various forms and precise dosages tailored to your needs.",
      imageSrc: "image6.jpg", // Replace with actual image URLs
      border_hex: "#169f0d",
      title_hex: "#169f0d",
    },
    {
      title: "BHRT Benefits",
      text: "Bioidentical Hormone Replacement Therapy offers a range of benefits. Learn More: improved energy, well-being, reduced symptoms, and more.",
      imageSrc: "image6.jpg", // Replace with actual image URLs
      border_hex: "#169f0d",
      title_hex: "#169f0d",
      learnMore: [
        { 1: "Improved energy levels" },
        { 2: "Enhanced physiological well-being and mood" },
        { 3: "Reduced hot flashes" },
        { 4: "Improved sex drive" },
        { 5: "Relief from vaginal dryness" },
        { 6: "Enhanced erectile function" },
        { 7: "Reduced risk of osteoporosis" },
        { 8: "Effective menopausal symptom management" },
      ],
      // Replace with actual image URLs
    },
  ];
  

  return (
    <div className="compounding-container">
      {/* Compounding Section */}
      <div className="compounding-title-box">
        <LandingHeader title={"Compounding Pharmacy"} />
        <p>Customized medications for you.</p>
      </div>
      <Boxes imageMap={imageMap} data={pairedBoxData} />
      {/* Pet Compounding Section */}
      <div
        className="compoundingPet-title-box"
        id="compoundingDerm-title-box"
        ref={dermatologyRef}
      >
        <LandingHeader title={"Dermatology Compounding"} />

        <p>Customized Skin Solutions</p>
      </div>
      <Boxes imageMap={imageMap} data={PeopleDermpairedBoxData} />
      {/* People Compounding Section */}

      <div
        className="compoundingDerm-title-box"
        id="compoundingPet-title-box"
        ref={petRef}
      >
        <LandingHeader title={"Pet Compounding Pharmacy"} />
        <p>Tailored Pet Medications</p>
      </div>

      <Boxes imageMap={imageMap} data={PetpairedBoxData} />

      <div
        className="compoundingHRT-title-box"
        id="compoundingHRT-title-box"
        ref={HRTReft}
      >
        <LandingHeader title={"Hormone Replacement Therapy Compounding"} />
        <p>Balanced Hormone Solutions</p>
      </div>

      <Boxes imageMap={imageMap} data={PeopleHRTpairedBoxData} />
    </div>
  );
}

export default Compounding;
