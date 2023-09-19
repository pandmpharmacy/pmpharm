import React, { useState } from "react";
import LandingHeader from "./LandingHeader";
import LeftInterlockedTextBoxes from "./LeftInterlockedTextBoxes";
import RightInterlockedTextBoxes from "./RightInterlockedTextBoxes";

function PetCompunding() {
  const [isPetCompoundingVisible, setPetCompoundingVisible] = useState(false);

  const togglePetCompounding = () => {
    setPetCompoundingVisible(!isPetCompoundingVisible);
  };

  return (
    <div>
      <LandingHeader title={"Pet Compounding"} onClick={togglePetCompounding} />
      {isPetCompoundingVisible && (
        <div>
          <LeftInterlockedTextBoxes
            title="Veterinary Medications"
            message="Your Trusted Veterinary Compounding Pharmacy"
          />
          <RightInterlockedTextBoxes
            title="Flavored Medication"
            message="Pets can be picky about flavors, making medication administration a challenge. At P&M Pharmacy, our skilled pet compounding pharmacy prepares delicious flavored medications that your pet will love. From tuna for cats to tutti frutti for exotic pets, we make giving medication enjoyable and stress-free."
          />
          <LeftInterlockedTextBoxes
            title="Ideal Size, Strength, and Dosage"
            message="Tailored Medications for Your Furry Friend"
          />
          <RightInterlockedTextBoxes
            title="Transdermal Medication"
            message="Some pets need stress-free medication options. P&M Pharmacy offers transdermal medications that are ideal for animals with hypertension or cardiovascular issues. This convenient delivery method makes medication administration easier for both you and your pet. We also provide topical medications for localized treatment, reducing discomfort."
          />
          <LeftInterlockedTextBoxes
            title="Unavailable Medication?"
            message="Customized Solutions for Unavailable Medications"
          />
          <RightInterlockedTextBoxes
            title="Combination Needed?"
            message="Managing multiple medications can be expensive and inconvenient. P&M Pharmacy simplifies treatment by compounding compatible medications into a single, easy-to-administer arrangement. We also offer various dosage forms, including medicated treats, containing multiple drugs, making pet care more convenient for you."
          />
        </div>
      )}
    </div>
  );
}

export default PetCompunding;
