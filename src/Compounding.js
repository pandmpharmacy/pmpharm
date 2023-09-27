import React from "react";
import LandingHeader from "./LandingHeader";
import "./Compounding.css";

const imageMap = {
    PharmacistAndLady: {
        jpg: require("../src/PharmacistAndLady.jpg"),
        webp: require("../src/PharmacistAndLady.webp"),
    },
    SurprisedCat: {
        jpg: require("../src/SurprisedCat.jpg"),
        webp: require("../src/SurprisedCat.webp"),
    },
    DogWoman: {
        jpg: require("../src/DogWoman.jpg"),
        webp: require("../src/DogWoman.webp"),
    },
    CatDog: {
        jpg: require("../src/CatDog.jpg"),
        webp: require("../src/CatDog.webp"),
    },
    DogMan: {
        jpg: require("../src/DogMan.jpg"),
        webp: require("../src/DogMan.webp"),
    },
    ManCat: {
        jpg: require("../src/ManCat.jpg"),
        webp: require("../src/ManCat.webp"),
    },
    High5Cat: {
        jpg: require("../src/High5Cat.jpg"),
        webp: require("../src/High5Cat.webp"),
    },
    DogSyringe: {
        jpg: require("../src/DogSyringe.jpg"),
        webp: require("../src/DogSyringe.webp"),
    },
    PillsInHand: {
        jpg: require("../src/PillsInHand.jpg"),
        webp: require("../src/PillsInHand.webp"),
    },
    ComputerStethoscope: {
        jpg: require("../src/ComputerStethoscope.jpg"),
        webp: require("../src/ComputerStethoscope.webp"),
    },
    HandCream: {
        jpg: require("../src/HandCream.jpg"),
        webp: require("../src/HandCream.webp"),
    },
    HandDropper: {
        jpg: require("../src/HandDropper.jpg"),
        webp: require("../src/HandDropper.webp"),
    },
    PharmacistWithGel: {
        jpg: require("../src/PharmacistWithGel.jpg"),
        webp: require("../src/PharmacistWithGel.webp"),
    },
    WomanWithChild: {
        jpg: require("../src/WomanWithChild.jpg"),
        webp: require("../src/WomanWithChild.webp"),
    }

    // Add more images as needed
};


function Compounding() {
    const renderBoxes = (data) => {
        return data.map((item, index) => (
            <div className="box" key={index} style={{ gridArea: `box${index + 1}` }}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                {item.imageSrc && ( // Check if imageSrc is present
                    <picture>
                        <source srcSet={imageMap[item.imageSrc]?.webp} type="image/webp" />
                        <img src={imageMap[item.imageSrc]?.jpg} alt={`Box ${index + 1}`} className="featured_image" />
                    </picture>
                )}
            </div>
        ));
    };

    // Rest of your code...


    const pairedBoxData = [
        {
            title: "Customized Medications Tailored to Your Needs",
            text: "At P&M Pharmacy, we're not just a pharmacy; we're your trusted compounding specialists serving Lake Worth, FL, and beyond. We understand that each patient is unique, and so are their medication needs. That's why we specialize in compounding personalized prescriptions, ensuring you receive the treatment that suits you best.",
            imageSrc: "PharmacistAndLady", // Use the image key from the imageMap
        },
        {
            title: "Insurance Coverage for Compounding Prescriptions",
            text: "Wondering if your insurance covers compounded prescriptions? It varies depending on your insurance plan. While very few insurance companies reimburse compounded prescriptions directly, patients may often seek reimbursement by submitting claim forms.",
            imageSrc: "ComputerStethoscope"
        },
        {
            title: "Versatility in Compounded Prescriptions",
            text: "The versatility of compounded prescriptions is one of our strengths. We can compound almost any medication, meeting the specific requirements of patients who need customized treatments.",
            imageSrc: "HandCream", // Replace with actual image URLs
        },
        {
            title: "Safety is Our Priority",
            text: "We prioritize your safety. The Food and Drug Administration recognizes the importance of pharmacy compounding in providing crucial alternatives for patients requiring medications not commercially available or facing drug shortages. Safety measures include prescriptions written by licensed practitioners and compounding by licensed pharmacists, along with compliance with state pharmacy board regulations.",
            imageSrc: "HandDropper", // Replace with actual image URLs
        },
        {
            title: "What Sets P&M Pharmacy Apart",
            text: "Why choose P&M Pharmacy over other specialty compounding pharmacies? Learn More",
            /*imageSrc: "PharmacistWithGel", // Replace with actual image URLs*/
        },
        {
            title: "Your Trusted Compounding Pharmacy",
            text: "Discover the difference at P&M Pharmacy. Whether you require Hormone Replacement Therapy (HRT), Veterinary Compounding, Dermatology, Sports Medicine, Podiatry, Wound Care, Pediatrics, or any other personalized medication, we're here to meet your needs.",
            imageSrc: "PharmacistWithGel" // Replace with actual image URLs
        },
        {
            title: "Customized Dosage Forms",
            text: "We have decades of experience in compounding and can create customized dosage forms to suit your preferences and needs. Whether you need a transdermal gel, topical spray, or cosmetically appealing cream, we have you covered.",
            imageSrc: "image8.jpg", // Replace with actual image URLs
        },
        {
            title: "Change, Combine, or Exclude Ingredients",
            text: "We can modify your medications in various ways, including changing the dosage form, altering the route of administration, creating combination preparations, and excluding specific ingredients to accommodate your unique circumstances.",
            imageSrc: "WomanWithChild", // Replace with actual image URLs
        }
        // Add more objects for additional boxes if needed
    ];

    const PetpairedBoxData = [
        {
            title: "Tailored Medications for Happy, Healthy Pets",
            text: "At P&M Pharmacy, we're your go-to veterinary compounding pharmacy in Palm Beach County. We understand that your pets are unique, and their medication needs can be as varied as their personalities. That's why we specialize in compounding specialized medications designed to meet the exclusive requirements of each animal.",
            imageSrc: "SurprisedCat", // Use the image key from the imageMap
        },
        {
            title: "Tailored Medications for Happy, Healthy Pets",
            text: "At P&M Pharmacy, we're your go-to veterinary compounding pharmacy in Palm Beach County. We understand that your pets are unique, and their medication needs can be as varied as their personalities. That's why we specialize in compounding specialized medications designed to meet the exclusive requirements of each animal.",
            imageSrc: "DogWoman", // Replace with actual image URLs
        },
        {
            title: "Flavored Medications for Happy Pets",
            text: "Administering medication to pets can be a challenge, especially when they're particular about flavors. At P&M Pharmacy, we're not just a pharmacy; we're a talented pet compounding pharmacy. We craft flavored medications that are not only easy to give but also enjoyable for your specific pet. Our range of flavors includes everything from tuna for cats to tutti frutti for exotic pets!",
            imageSrc: "CatDog", // Replace with actual image URLs
        },
        {
            title: "Customized Size, Strength, and Dosage",
            text: "Many commercial animal medications come in limited sizes and strengths, which may not be suitable for every pet. As your local pet pharmacy, P&M Pharmacy formulates medications that are just right in terms of size, strength, and dose for your pet. We offer medications in various forms, including oral, transdermal, and more. For instance, P&M Pharmacy creates medicated chewable treats, ear drops, liquid concentrates, and other user-friendly options tailored to your animal's needs.",
            
        },
        {
            title: "Transdermal Medication for Comfort",
            text: "P&M Pharmacy provides a wide range of medications compatible with transdermal bases. This delivery method is particularly beneficial for animals with conditions like hypertension or cardiovascular illness, as it minimizes stress. It also simplifies the medication process for pet owners who no longer have to struggle with medicating their animals. Additionally, we offer topical medications for localized inflammation or infection, ensuring your pet's comfort.",
            
        },
        {
            title: "When Medications Are Unavailable",
            text: "In situations where specific medications become unavailable, pet owners often face challenges. Whether due to discontinued manufacturing or unavailability of veterinary formulations, the search for pet prescriptions near me can be frustrating. At P&M Pharmacy, we bridge this gap by compounding personalized dosage forms using pharmaceutical-grade ingredients, ensuring your pet receives the necessary treatment.",
            imageSrc: "High5Cat", // Replace with actual image URLs
        },
        {
            title: "Combination Medications for Comprehensive Care",
            text: "Sometimes, treating multiple symptoms requires combining several medications. Dealing with separate containers can be costly and inconvenient. That's where P&M Pharmacy excels. We compound essential concentrations of compatible medications into a single, easy-to-use formulation. To simplify administration further, we offer various dosage forms, including medicated treats containing multiple drugs.",
            imageSrc: "ManCat", // Replace with actual image URLs
        },
        {
            title: "Trust P&M Pharmacy for all your pet's compounding needs. Contact us today to ensure your furry family members receive the personalized care they deserve. Your pets' well-being is our priority!",
            text: "",
            imageSrc: "DogMan", // Replace with actual image URLs
        }
        // Add more objects for additional boxes if needed
    ];

    const PeoplepairedBoxData = [
        {
            title: "Customized Medications Tailored to Your Needs",
            text: "At P&M Pharmacy, we're not just a pharmacy; we're your trusted compounding specialists serving Lake Worth, FL, and beyond. We understand that each patient is unique, and so are their medication needs. That's why we specialize in compounding personalized prescriptions, ensuring you receive the treatment that suits you best.",
            // imageSrc: "PharmacistAndLady", // You can omit the imageSrc if an image is not needed for this box
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
            imageSrc: "imaged6.jpg", // Replace with actual image URLs
        }
        // Add more objects for additional boxes if needed
    ];

    return (
        <div className="compounding-container">
            {/* Compounding Section */}
            <div className="compounding-title-box">
                <LandingHeader title={"Compounding Pharmacy"} />
                <p>Compounding Short message goes here.</p>
            </div>
            <div className="compounding-pair-boxes">{renderBoxes(pairedBoxData)}</div>

            {/* Pet Compounding Section */}
            <div className="compoundingPet-title-box">
                <LandingHeader title={"Pet Compounding Pharmacy"} />
                <p>Compounding Short message goes here.</p>
            </div>
            <div className="compounding-pair-boxes">{renderBoxes(PetpairedBoxData)}</div>

            {/* Human Compounding Section */}
            <div className="compoundingPeople-title-box">
                <LandingHeader title={"Human Compounding Pharmacy"} />
                <p>Human Compounding Short message goes here.</p>
            </div>
            <div className="compounding-pair-boxes">{renderBoxes(PeoplepairedBoxData)}</div>
        </div>
    );
}

export default Compounding;
