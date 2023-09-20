import React, { useState } from "react";
import "./Compounding.css"
import { useNavigate } from "react-router-dom";
import LeftInterlockedTextBoxes from "./LeftInterlockedTextBoxes";
import RightInterlockedTextBoxes from "./RightInterlockedTextBoxes";
import LandingHeader from "./LandingHeader";
import PetCompunding from "./PetCompunding";
import HumanCompounding from "./HumanCompounding";

function Compounding() {
  const navigate = useNavigate();
  const [showDermatology, setShowDermatology] = useState(false);
  const [showHormoneReplacement, setShowHormoneReplacement] = useState(false);

  const toggleDermatology = () => {
    setShowDermatology(!showDermatology);
    setShowHormoneReplacement(false); // Close the Hormone Replacement section
  };

  const toggleHormoneReplacement = () => {
    setShowHormoneReplacement(!showHormoneReplacement);
    setShowDermatology(false); // Close the Dermatology section
  };

  return (
    <div>
      <LandingHeader title={"Compounding Services"} />
      <LeftInterlockedTextBoxes title="Welcome to P&M Pharmacy" message="Your Trusted Source for Compounded Medications and Personalized Care." />
      <RightInterlockedTextBoxes title="Custom Compounded Prescriptions" message="Tailored Medications to Suit Your Unique Needs." />
      <LeftInterlockedTextBoxes title="Quality Compounding Services" message="Experience Precision and Consistency in Every Prescription." />
      <RightInterlockedTextBoxes title="Safe and Effective Compounding" message="Your Health and Safety Are Our Top Priorities." />
      <LeftInterlockedTextBoxes title="P&M Pharmacy Difference" message="Discover Why We're Lake Worth's Leading Specialty Compounding Pharmacy." />
      <RightInterlockedTextBoxes title="Same Day Service" message="Get Your Compounded Prescriptions Faster and Easier." />
      <LeftInterlockedTextBoxes title="Your Compounding Experts" message="Decades of Experience for Your Medication Needs." />
      <RightInterlockedTextBoxes title="Medication Personalization" message="Tailoring Dosage Forms to Match Your Preferences." />
      <LeftInterlockedTextBoxes title="Exclusion of Unnecessary Ingredients" message="Medications Prepared with Your Allergies and Preferences in Mind." />
      <div>
        <HumanCompounding />
        <button onClick={toggleDermatology}>Dermatology Compounding</button>
        <button onClick={toggleHormoneReplacement}>Hormone Replacement Therapy</button>
        {showDermatology && (
          <>
            <LandingHeader title={"Dermatology Compounding"} />
            <LeftInterlockedTextBoxes title="Customized Dermatologic Compounding Solutions" message="Tailored Medications for Your Skin Health Needs." />
            <RightInterlockedTextBoxes title="Leading Dermatology Pharmacy in Wellington, FL" message="Your Trusted Source for Dermatologic Care and Compounded Medications." />
            <LeftInterlockedTextBoxes title="Innovative Compounding Technology" message="Cosmetic Creams, Sprays, and More - We Customize Medications for You." />
            <RightInterlockedTextBoxes title="Comprehensive Dermatology Solutions" message="Addressing a Wide Range of Skin Conditions with Compounded Medications." />
            <LeftInterlockedTextBoxes title="Partnering in Your Skin Health" message="Collaborating with Your Healthcare Providers for Custom Dermatologic Medications." />
            <RightInterlockedTextBoxes title="Effective Compounded Dermatology Medications" message="Improving Skin Health for Conditions Such as Acne, Eczema, and More." />
            <LeftInterlockedTextBoxes title="Innovative Dermatology Compounding" message="Creating Unique Formulas for Your Dermatological Therapy Needs." />
            <RightInterlockedTextBoxes title="Diverse Compounded Medications" message="Examples of Dermatologic Compounds Tailored to Your Skin Health." />
            <LeftInterlockedTextBoxes title="Enhancing Skin Care" message="Customized Solutions for Skin Damage, Wrinkles, and Infections." />
          </>
        )}
        {showHormoneReplacement && (
          <>
            <LandingHeader title={"Hormone Replacement Therapy"} />
            <LeftInterlockedTextBoxes title="Elevate Your Health with Hormone Replacement Therapy" message="Palm Beach County's Trusted Source for High-Quality Hormone Replacement Therapy." />
            <RightInterlockedTextBoxes title="Understanding the Power of Hormones" message="Unlocking the Key to Balancing Bodily Functions and Well-Being." />
            <LeftInterlockedTextBoxes title="Types of Hormones We Address" message="Estrogens, Progesterone, Testosterone, and More: Optimizing Your Hormonal Health." />
            <RightInterlockedTextBoxes title="Recognizing Hormone Imbalance" message="Empowering Men and Women to Address Hormonal Imbalances and Their Effects." />
            <LeftInterlockedTextBoxes title="Taking Control of Your Hormonal Health" message="Hormone Replacement Therapy: Your Path to a Balanced Life." />
            <RightInterlockedTextBoxes title="Customized Hormone Therapy at Your Fingertips" message="P&M Pharmacy's Compounding Expertise for Precise Hormone Dosages." />
            <LeftInterlockedTextBoxes title="Benefits of Bioidentical Hormone Replacement Therapy" message="Improving Energy, Mood, and Overall Well-Being with BHRT." />
            <RightInterlockedTextBoxes title="Act Now for Hormonal Balance" message="Don't Let Hormone Imbalance Dictate Your Life - Explore Hormone Replacement Therapy." />
            <LeftInterlockedTextBoxes title="Personalized Hormone Therapy Options" message="Tailored Capsules, Creams, and Troche for Your Hormone Replacement Needs." />
            <RightInterlockedTextBoxes title="Enhancing Quality of Life with HRT" message="Relief from Menopausal Symptoms and Andropause Through Hormone Replacement Therapy." />
          </>
        )}
      </div>
      <div onClick={() => navigate("/pet-compounding")}>
        <PetCompunding />
      </div>
    </div>
  );
}


export default Compounding;
