import React from "react";
import SurprisedCatWebp from "../src/SurprisedCat.webp";
import SurprisedCatJPG from "../src/SurprisedCat.jpg";
import DogWomanWebp from "../src/DogWoman.webp";
import DogWomanJPG from "../src/DogWoman.jpg";
import CatDogWebp from "../src/CatDog.webp";
import CatDogJPG from "../src/CatDog.jpg";
import DogManWebp from "../src/DogMan.webp";
import DogManJPG from "../src/DogMan.jpg";
import ManCatWebp from "../src/ManCat.webp";
import ManCatJPG from "../src/ManCat.jpg";
import High5CatWebp from "../src/High5Cat.webp";
import High5CatJPG from "../src/High5Cat.jpg";
import DogSyringeWebp from "../src/DogSyringe.webp";
import DogSyringeJPG from "../src/DogSyringe.jpg";


/*import { useNavigate } from "react-router-dom";*/
/*import LeftInterlockedTextBoxes from "./LeftInterlockedTextBoxes";*/
import LandingHeader from "./LandingHeader";
import "./Compounding.css"; // Import a CSS file for styling (create this file)

function Compounding() {
  /*onst navigate = useNavigate();*/

  // Define an array to generate multiple instances of  Compounding paired boxes
const pairedBoxData = [
  {
    title: "Customized Medications Tailored to Your Needs",
    text: "At P&M Pharmacy, we're not just a pharmacy; we're your trusted compounding specialists serving Lake Worth, FL, and beyond. We understand that each patient is unique, and so are their medication needs. That's why we specialize in compounding personalized prescriptions, ensuring you receive the treatment that suits you best.",
    imageSrc: "image1.jpg", // Replace with actual image URLs
  },
  {
    title: "Insurance Coverage for Compounding Prescriptions",
    text: "Wondering if your insurance covers compounded prescriptions? It varies depending on your insurance plan. While very few insurance companies reimburse compounded prescriptions directly, patients may often seek reimbursement by submitting claim forms.",
    imageSrc: "image2.jpg", // Replace with actual image URLs
  },
  {
    title: "Versatility in Compounded Prescriptions",
    text: "The versatility of compounded prescriptions is one of our strengths. We can compound almost any medication, meeting the specific requirements of patients who need customized treatments.",
    imageSrc: "image3.jpg", // Replace with actual image URLs
  },
  {
    title: "Versatility in Compounded Prescriptions",
    text: "The versatility of compounded prescriptions is one of our strengths. We can compound almost any medication, meeting the specific requirements of patients who need customized treatments. Our delivery vehicles include: Creams, gels, and ointments. Learn More",
    imageSrc: "image4.jpg", // Replace with actual image URLs
  },
  {
    title: "Safety is Our Priority",
    text: "We prioritize your safety. The Food and Drug Administration recognizes the importance of pharmacy compounding in providing crucial alternatives for patients requiring medications not commercially available or facing drug shortages. Safety measures include prescriptions written by licensed practitioners and compounding by licensed pharmacists, along with compliance with state pharmacy board regulations.",
    imageSrc: "image5.jpg", // Replace with actual image URLs
  },
  {
    title: "What Sets P&M Pharmacy Apart",
    text: "Why choose P&M Pharmacy over other specialty compounding pharmacies? Learn More",
    imageSrc: "image6.jpg", // Replace with actual image URLs
  },
  {
    title: "Your Trusted Compounding Pharmacy",
    text: "Discover the difference at P&M Pharmacy. Whether you require Hormone Replacement Therapy (HRT), Veterinary Compounding, Dermatology, Sports Medicine, Podiatry, Wound Care, Pediatrics, or any other personalized medication, we're here to meet your needs.",
    imageSrc: "image7.jpg", // Replace with actual image URLs
  },
  {
    title: "Customized Dosage Forms",
    text: "We have decades of experience in compounding and can create customized dosage forms to suit your preferences and needs. Whether you need a transdermal gel, topical spray, or cosmetically appealing cream, we have you covered.",
    imageSrc: "image8.jpg", // Replace with actual image URLs
  },
  {
    title: "Change, Combine, or Exclude Ingredients",
    text: "We can modify your medications in various ways, including changing the dosage form, altering the route of administration, creating combination preparations, and excluding specific ingredients to accommodate your unique circumstances.",
    imageSrc: "image9.jpg", // Replace with actual image URLs
  }
  
  // Add more data for additional boxes if needed
];

// You can use the pairedBoxData array in your application as needed.

 // Define an array to generate multiple instances of  Compounding paired boxes
 const PetpairedBoxData = [
  {
    title: "Tailored Medications for Happy, Healthy Pets",
    text: "At P&M Pharmacy, we're your go-to veterinary compounding pharmacy in Palm Beach County. We understand that your pets are unique, and their medication needs can be as varied as their personalities. That's why we specialize in compounding specialized medications designed to meet the exclusive requirements of each animal.",
    imageSrc: "SurprisedCat.webp", // Replace with actual image URLs
  },
  {
    title: "Flavored Medications for Happy Pets",
    text: "Administering medication to pets can be a challenge, especially when they're particular about flavors. At P&M Pharmacy, we're not just a pharmacy; we're a talented pet compounding pharmacy. We craft flavored medications that are not only easy to give but also enjoyable for your specific pet. Our range of flavors includes everything from tuna for cats to tutti frutti for exotic pets!",
    imageSrc: "image2.jpg", // Replace with actual image URLs
  },
  {
    title: "Customized Size, Strength, and Dosage",
    text: "Many commercial animal medications come in limited sizes and strengths, which may not be suitable for every pet. As your local pet pharmacy, P&M Pharmacy formulates medications that are just right in terms of size, strength, and dose for your pet. We offer medications in various forms, including oral, transdermal, and more. For instance, P&M Pharmacy creates medicated chewable treats, ear drops, liquid concentrates, and other user-friendly options tailored to your animal's needs.",
    imageSrc: "image3.jpg", // Replace with actual image URLs
  },
  {
    title: "Transdermal Medication for Comfort",
    text: "P&M Pharmacy provides a wide range of medications compatible with transdermal bases. This delivery method is particularly beneficial for animals with conditions like hypertension or cardiovascular illness, as it minimizes stress. It also simplifies the medication process for pet owners who no longer have to struggle with medicating their animals. Additionally, we offer topical medications for localized inflammation or infection, ensuring your pet's comfort.",
    imageSrc: "image4.jpg", // Replace with actual image URLs
  },
  {
    title: "When Medications Are Unavailable",
    text: "In situations where specific medications become unavailable, pet owners often face challenges. Whether due to discontinued manufacturing or unavailability of veterinary formulations, the search for pet prescriptions near me can be frustrating. At P&M Pharmacy, we bridge this gap by compounding personalized dosage forms using pharmaceutical-grade ingredients, ensuring your pet receives the necessary treatment.",
    imageSrc: "image5.jpg", // Replace with actual image URLs
  },
  {
    title: "Combination Medications for Comprehensive Care",
    text: "Sometimes, treating multiple symptoms requires combining several medications. Dealing with separate containers can be costly and inconvenient. That's where P&M Pharmacy excels. We compound essential concentrations of compatible medications into a single, easy-to-use formulation. To simplify administration further, we offer various dosage forms, including medicated treats containing multiple drugs.",
    imageSrc: "image6.jpg", // Replace with actual image URLs
  },
  {
    title: "Trust P&M Pharmacy for all your pet's compounding needs. Contact us today to ensure your furry family members receive the personalized care they deserve. Your pets' well-being is our priority!",
    text: "",
    imageSrc: "image7.jpg", // Replace with actual image URLs
  }
  // Add more data for additional boxes if needed
];

// You can use the PetpairedBoxData array in your application as needed.

// Define an array to generate multiple instances of  People paired boxes
const PeoplepairedBoxData = [
  {
    title: "Customized Medications Tailored to Your Needs",
    text: "At P&M Pharmacy, we're not just a pharmacy; we're your trusted compounding specialists serving Lake Worth, FL, and beyond. We understand that each patient is unique, and so are their medication needs. That's why we specialize in compounding personalized prescriptions, ensuring you receive the treatment that suits you best.",
    imageSrc: "image1.jpg", // Replace with actual image URLs
  },
  {
    title: "Insurance Coverage for Compounding Prescriptions",
    text: "Wondering if your insurance covers compounded prescriptions? It varies depending on your insurance plan. While very few insurance companies reimburse compounded prescriptions directly, patients may often seek reimbursement by submitting claim forms.",
    imageSrc: "image2.jpg", // Replace with actual image URLs
  },
  {
    title: "Versatility in Compounded Prescriptions",
    text: "The versatility of compounded prescriptions is one of our strengths. We can compound almost any medication, meeting the specific requirements of patients who need customized treatments.",
    imageSrc: "image3.jpg", // Replace with actual image URLs
  },
  {
    title: "Versatility in Compounded Prescriptions",
    text: "The versatility of compounded prescriptions is one of our strengths. We can compound almost any medication, meeting the specific requirements of patients who need customized treatments. Our delivery vehicles include: Creams, gels, and ointments. Learn More",
    imageSrc: "image4.jpg", // Replace with actual image URLs
  },
  {
    title: "Safety is Our Priority",
    text: "We prioritize your safety. The Food and Drug Administration recognizes the importance of pharmacy compounding in providing crucial alternatives for patients requiring medications not commercially available or facing drug shortages. Safety measures include prescriptions written by licensed practitioners and compounding by licensed pharmacists, along with compliance with state pharmacy board regulations.",
    imageSrc: "image5.jpg", // Replace with actual image URLs
  },
  {
    title: "What Sets P&M Pharmacy Apart",
    text: "Why choose P&M Pharmacy over other specialty compounding pharmacies? Learn More",
    imageSrc: "image6.jpg", // Replace with actual image URLs
  },
  {
    title: "Your Trusted Compounding Pharmacy",
    text: "Discover the difference at P&M Pharmacy. Whether you require Hormone Replacement Therapy (HRT), Veterinary Compounding, Dermatology, Sports Medicine, Podiatry, Wound Care, Pediatrics, or any other personalized medication, we're here to meet your needs.",
    imageSrc: "image7.jpg", // Replace with actual image URLs
  },
  {
    title: "Customized Dosage Forms",
    text: "We have decades of experience in compounding and can create customized dosage forms to suit your preferences and needs. Whether you need a transdermal gel, topical spray, or cosmetically appealing cream, we have you covered.",
    imageSrc: "image8.jpg", // Replace with actual image URLs
  },
  {
    title: "Change, Combine, or Exclude Ingredients",
    text: "We can modify your medications in various ways, including changing the dosage form, altering the route of administration, creating combination preparations, and excluding specific ingredients to accommodate your unique circumstances.",
    imageSrc: "image9.jpg", // Replace with actual image URLs
  },
  {
    title: "Wound Care Supplies",
    text: "We stock a wide range of wound care supplies to facilitate wound healing and recovery.",
    imageSrc: "image10.jpg", // Replace with actual image URLs
  },
  {
    title: "Wound Care Supplies",
    text: "We stock a wide range of wound care supplies to facilitate wound healing and recovery.",
    imageSrc: "image11.jpg", // Replace with actual image URLs
  },
  {
    title: "Support Stockings",
    text: "Discover support stockings to improve circulation and alleviate discomfort.",
    imageSrc: "image12.jpg", // Replace with actual image URLs
  },
  {
    title: "Daily Living Aids",
    text: "We offer a range of daily living aids to enhance your independence and quality of life.",
    imageSrc: "image13.jpg", // Replace with actual image URLs
  },
  {
    title: "Incontinence Supplies",
    text: "Find incontinence supplies to ensure comfort and confidence.",
    imageSrc: "image14.jpg", // Replace with actual image URLs
  },
  {
    title: "Foot Care",
    text: "Explore our foot care products to maintain healthy and comfortable feet.",
    imageSrc: "image15.jpg", // Replace with actual image URLs
  },
  {
    title: "OTC (Vitamins, Skincare, Cough and Cold, etc",
    text: "Our pharmacy carries a diverse selection of over-the-counter products, including vitamins, skincare, and cough and cold remedies, for your health and wellness needs.",
    imageSrc: "image16.jpg", // Replace with actual image URLs
  }
  // Add more data for additional boxes if needed
];

// You can use the PeoplepairedBoxData array in your application as needed.


  return (
    <div className="compounding-container">
      <div className="compounding-title-box">
        <LandingHeader title={"Compounding Pharmacy"} />
        <p>Compounding Short message goes here.</p>
      </div>
      <div className="compounding-pair-boxes">
        <div className="box single-box" style={{ gridArea: "box1" }}>
          <h2>{pairedBoxData[0].title}</h2>
          <p>{pairedBoxData[0].text}</p>
          <img src={pairedBoxData[0].imageSrc} alt="Box 1" />
        </div>
        <div className="box" style={{ gridArea: "box2" }}>
          <h2>{pairedBoxData[1].title}</h2>
          <p>{pairedBoxData[1].text}</p>
          <img src={pairedBoxData[1].imageSrc} alt="Box 2" />
        </div>
        <div className="box" style={{ gridArea: "box3" }}>
          <h2>{pairedBoxData[2].title}</h2>
          <p>{pairedBoxData[2].text}</p>
          <img src={pairedBoxData[2].imageSrc} alt="Box 3" />
        </div>
        <div className="box" style={{ gridArea: "box4" }}>
          <h2>{pairedBoxData[3].title}</h2>
          <p>{pairedBoxData[3].text}</p>
          <img src={pairedBoxData[3].imageSrc} alt="Box 4" />
        </div>
        <div className="box" style={{ gridArea: "box5" }}>
          <h2>{pairedBoxData[4].title}</h2>
          <p>{pairedBoxData[4].text}</p>
          <img src={pairedBoxData[4].imageSrc} alt="Box 5" />
        </div>
        <div className="box" style={{ gridArea: "box6" }}>
          <h2>{pairedBoxData[5].title}</h2>
          <p>{pairedBoxData[5].text}</p>
          <img src={pairedBoxData[5].imageSrc} alt="Box 6" />
        </div>
        <div className="box" style={{ gridArea: "box7" }}>
          <h2>{pairedBoxData[6].title}</h2>
          <p>{pairedBoxData[6].text}</p>
          <img src={pairedBoxData[6].imageSrc} alt="Box 7" />
        </div>
        <div className="box" style={{ gridArea: "box8" }}>
          <h2>{pairedBoxData[7].title}</h2>
          <p>{pairedBoxData[7].text}</p>
          <img src={pairedBoxData[7].imageSrc} alt="Box 8" />
        </div>
        <div className="box" style={{ gridArea: "box9" }}>
          <h2>{pairedBoxData[8].title}</h2>
          <p>{pairedBoxData[8].text}</p>
          <img src={pairedBoxData[8].imageSrc} alt="Box 9" />
        </div>
      </div>

       
      <div className="compoundingPet-title-box">
        <LandingHeader title={"Pet Compounding Pharmacy"} />
        <p>Compounding Short message goes here.</p>
      </div>
      <div className="compounding-pair-boxes">
        <div className="box single-box" style={{ gridArea: "box1" }}>
          <h2>{PetpairedBoxData[0].title}</h2>
          <p>{PetpairedBoxData[0].text}</p>
          <picture>
            <source srcSet={SurprisedCatWebp} type="image/webp" />
            <img src={SurprisedCatJPG} alt="" className="featured_image" />
          </picture>
        </div>
        <div className="box" style={{ gridArea: "box2" }}>
          <h2>{PetpairedBoxData[1].title}</h2>
          <p>{PetpairedBoxData[1].text}</p>
          <picture>
            <source srcSet={DogWomanWebp} type="image/webp" />
            <img src={DogWomanJPG} alt="" className="featured_image" />
          </picture>
        </div>
        <div className="box" style={{ gridArea: "box3" }}>
          <h2>{PetpairedBoxData[2].title}</h2>
          <p>{PetpairedBoxData[2].text}</p>
          <picture>
            <source srcSet={CatDogWebp} type="image/webp" />
            <img src={CatDogJPG} alt="" className="featured_image" />
          </picture>
        </div>
        <div className="box" style={{ gridArea: "box4" }}>
          <h2>{PetpairedBoxData[3].title}</h2>
          <p>{PetpairedBoxData[3].text}</p>
          <picture>
            <source srcSet={High5CatWebp} type="image/webp" />
            <img src={High5CatJPG} alt="" className="featured_image" />
          </picture>
        </div>
        <div className="box" style={{ gridArea: "box5" }}>
          <h2>{PetpairedBoxData[4].title}</h2>
          <p>{PetpairedBoxData[4].text}</p>
          <picture>
            <source srcSet={ManCatWebp} type="image/webp" />
            <img src={ManCatJPG} alt="" className="featured_image" />
          </picture>
        </div>
        <div className="box" style={{ gridArea: "box6" }}>
          <h2>{PetpairedBoxData[5].title}</h2>
          <p>{PetpairedBoxData[5].text}</p>
          <picture>
            <source srcSet={DogSyringeWebp} type="image/webp" />
            <img src={DogSyringeJPG} alt="" className="featured_image" />
          </picture>
        </div>
        <div className="box" style={{ gridArea: "box7" }}>
          <h2>{PetpairedBoxData[6].title}</h2>
          <p>{PetpairedBoxData[6].text}</p>
          <picture>
            <source srcSet={DogManWebp} type="image/webp" />
            <img src={DogManJPG} alt="" className="featured_image" />
        </picture>
        </div>
      </div>


      <div className="compoundingPeople-title-box">
        <LandingHeader title={"Human Compounding Pharmacy"} />
        <p>Human Compounding Short message goes here.</p>
      </div>
      <div className="compounding-pair-boxes">
        <div className="box single-box" style={{ gridArea: "box1" }}>
          <h2>{PeoplepairedBoxData[0].title}</h2>
          <p>{PeoplepairedBoxData[0].text}</p>
          <img src={PeoplepairedBoxData[0].imageSrc} alt="Box 1" />
        </div>
        <div className="box" style={{ gridArea: "box2" }}>
          <h2>{PeoplepairedBoxData[1].title}</h2>
          <p>{PeoplepairedBoxData[1].text}</p>
          <img src={PeoplepairedBoxData[1].imageSrc} alt="Box 2" />
        </div>
        <div className="box" style={{ gridArea: "box3" }}>
          <h2>{PeoplepairedBoxData[2].title}</h2>
          <p>{PeoplepairedBoxData[2].text}</p>
          <img src={PeoplepairedBoxData[2].imageSrc} alt="Box 3" />
        </div>
        <div className="box" style={{ gridArea: "box4" }}>
          <h2>{PeoplepairedBoxData[3].title}</h2>
          <p>{PeoplepairedBoxData[3].text}</p>
          <img src={PeoplepairedBoxData[3].imageSrc} alt="Box 4" />
        </div>
        <div className="box" style={{ gridArea: "box5" }}>
          <h2>{PeoplepairedBoxData[4].title}</h2>
          <p>{PeoplepairedBoxData[4].text}</p>
          <img src={PeoplepairedBoxData[4].imageSrc} alt="Box 5" />
        </div>
        <div className="box" style={{ gridArea: "box6" }}>
          <h2>{PeoplepairedBoxData[5].title}</h2>
          <p>{PeoplepairedBoxData[5].text}</p>
          <img src={PeoplepairedBoxData[5].imageSrc} alt="Box 6" />
        </div>
        <div className="box" style={{ gridArea: "box7" }}>
          <h2>{PeoplepairedBoxData[6].title}</h2>
          <p>{PeoplepairedBoxData[6].text}</p>
          <img src={PeoplepairedBoxData[6].imageSrc} alt="Box 7" />
        </div>
        <div className="box" style={{ gridArea: "box8" }}>
          <h2>{PeoplepairedBoxData[7].title}</h2>
          <p>{PeoplepairedBoxData[7].text}</p>
          <img src={PeoplepairedBoxData[7].imageSrc} alt="Box 8" />
        </div>
        <div className="box" style={{ gridArea: "box9" }}>
          <h2>{PeoplepairedBoxData[8].title}</h2>
          <p>{PeoplepairedBoxData[8].text}</p>
          <img src={PeoplepairedBoxData[8].imageSrc} alt="Box 9" />
        </div>
        <div className="box" style={{ gridArea: "box10" }}>
          <h2>{PeoplepairedBoxData[9].title}</h2>
          <p>{PeoplepairedBoxData[9].text}</p>
          <img src={PeoplepairedBoxData[9].imageSrc} alt="Box 10" />
        </div>
        <div className="box" style={{ gridArea: "box11" }}>
          <h2>{PeoplepairedBoxData[10].title}</h2>
          <p>{PeoplepairedBoxData[10].text}</p>
          <img src={PeoplepairedBoxData[10].imageSrc} alt="Box 11" />
        </div>
        <div className="box" style={{ gridArea: "box12" }}>
          <h2>{PeoplepairedBoxData[11].title}</h2>
          <p>{PeoplepairedBoxData[11].text}</p>
          <img src={PeoplepairedBoxData[11].imageSrc} alt="Box 12" />
        </div>
        <div className="box" style={{ gridArea: "box13" }}>
          <h2>{PeoplepairedBoxData[12].title}</h2>
          <p>{PeoplepairedBoxData[12].text}</p>
          <img src={PeoplepairedBoxData[12].imageSrc} alt="Box 13" />
        </div>
        <div className="box" style={{ gridArea: "box14" }}>
          <h2>{PeoplepairedBoxData[13].title}</h2>
          <p>{PeoplepairedBoxData[13].text}</p>
          <img src={PeoplepairedBoxData[13].imageSrc} alt="Box 14" />
        </div>
        <div className="box" style={{ gridArea: "box15" }}>
          <h2>{PeoplepairedBoxData[14].title}</h2>
          <p>{PeoplepairedBoxData[14].text}</p>
          <img src={PeoplepairedBoxData[14].imageSrc} alt="Box 15" />
        </div>
        <div className="box" style={{ gridArea: "box16" }}>
          <h2>{PeoplepairedBoxData[15].title}</h2>
          <p>{PeoplepairedBoxData[15].text}</p>
          <img src={PeoplepairedBoxData[15].imageSrc} alt="Box 16" />
        </div>
      </div>
    </div>
  );
}

export default Compounding;
