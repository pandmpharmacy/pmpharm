import React from "react";
import { useNavigate } from "react-router-dom";
import LeftInterlockedTextBoxes from "./LeftInterlockedTextBoxes";
import RightInterlockedTextBoxes from "./RightInterlockedTextBoxes";
import LandingHeader from "./LandingHeader";
import PetCompunding from "./PetCompunding";
import HumanCompounding from "./HumanCompounding";

function Compounding() {
  const navigate = useNavigate();

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
      <button onClick={() => navigate("/")}>Go to Home</button>
      <div onClick={() => navigate("/retail-compounding")}>
        <HumanCompounding />
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
      </div>
      <div onClick={() => navigate("/pet-compounding")}>
        <PetCompunding />
      </div>
    </div>
  );
}

export default Compounding;
