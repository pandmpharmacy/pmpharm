import React, { useState } from "react";
import LandingHeader from "./LandingHeader";
import "./Compounding.css";


const imageMap = {
    RetailDiabeticSupply: {
        jpg: require("../src/images/RetailDiabeticSupply.jpg"),
        webp: require("../src/images/RetailDiabeticSupply.webp"),
    },
    RetailMedications: {
        jpg: require("../src/images/RetailMedications.jpg"),
        webp: require("../src/images/RetailMedications.webp"),
    },
    RetailFreeDelivery: {
        jpg: require("../src/images/RetailFreeDelivery.jpg"),
        webp: require("../src/images/RetailFreeDelivery.webp"),
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
    }

    // Add more images as needed
};


function Compounding() {
    const [activeBox, setActiveBox] = useState(null);

    const toggleBoxContent = (index) => {
        if (activeBox === index) {
            setActiveBox(null);
        } else {
            setActiveBox(index);
        }
    };
    const renderBoxes = (data) => {

        return data.map((item, index) => (
            <div className="box"
                key={index}
                style={{
                    gridArea: `box${index + 1}`,
                    backgroundColor: activeBox === index && item.border_hex ? item.border_hex : 'initial'
                }}>

                <div

                >
                    <h2 className={activeBox === index ? 'active-title' : ''}>{item.title}</h2>

                    {activeBox === index && item.learnMore ? (
                        <ul>
                            {item.learnMore.map((sentenceObj, idx) => (
                                <li key={idx}>{Object.values(sentenceObj)[0]}</li>
                            ))}
                        </ul>
                    ) : (
                        <>
                            <p>{item.text}</p>
                            {item.imageSrc && (
                                <picture>
                                    <source srcSet={imageMap[item.imageSrc]?.webp} type="image/webp" />
                                    <img src={imageMap[item.imageSrc]?.jpg} alt={`Box ${index + 1}`} className="featured_image" />
                                </picture>
                            )}
                        </>
                    )}


                </div>
                {item.learnMore && (
                    <button onClick={() => toggleBoxContent(index)}>
                        {activeBox === index ? 'X' : '+'}
                    </button>
                )}
            </div>

        ));
    };

    // Rest of your code...


    const pairedBoxData = [
        {
          title: "Free Delivery",
          text: "We offer convenient and free delivery services within a 3-mile radius of our pharmacy to ensure you receive your medications at your doorstep.",
          imageSrc: "RetailFreeDelivery",
        },
        {
          title: "Retail Prescriptions (quick and easy)",
          text: "Experience hassle-free parking and have your prescriptions filled in just 5-10 minutes for your convenience.",
          imageSrc: "RetailMedications", // Replace with actual image URLs
           
        },
        {
          title: "Compounded Prescriptions (customized medications)",
          text: "Our expert pharmacists can tailor your medications to your unique needs through compounded prescriptions.n",
          imageSrc: "image3.jpg",
        },
        {
          title: "Therapy Adherence",
          text: "Our services include counseling and support to help you adhere to your prescribed therapy regimens effectively.",
          imageSrc: "image4.jpg",
        },
        {
          title: "Medication Synchronization (reduce hospitalization)",
          text: "Medication synchronization reduces the risk of hospitalization and the need for frequent pharmacy visits by aligning your medication refills.",
          imageSrc: "image5.jpg",
        },
        {
          title: "Diabetic Supplies",
          text: "Find a comprehensive range of diabetic supplies to manage your diabetes effectively.",
          imageSrc: "RetailDiabeticSupply",
        },
        {
          title: "Orthopedic Supplies",
          text: "We offer a variety of orthopedic supplies to aid in your comfort and recovery.",
          imageSrc: "image7.jpg",
        },
        {
          title: "Ostomy and Urinary Supplies",
          text: "We provide a selection of ostomy and urinary supplies to support your specific healthcare needs.",
          imageSrc: "image8.jpg",
        },
        {
          title: "Nebulizers",
          text: "Explore our nebulizer options for respiratory treatments in the comfort of your home.",
          imageSrc: "image9.jpg",
        },
        {
          title: "Wound Care Supplies",
          text: "We stock a wide range of wound care supplies to facilitate wound healing and recovery.",
          imageSrc: "image10.jpg",
        },
        {
          title: "Wound Care Supplies",
          text: "We stock a wide range of wound care supplies to facilitate wound healing and recovery.",
          imageSrc: "image11.jpg",
        },
        {
          title: "Support Stockings",
          text: "Discover support stockings to improve circulation and alleviate discomfort.",
          imageSrc: "image12.jpg",
        },
        {
          title: "Daily Living Aids",
          text: "We offer a range of daily living aids to enhance your independence and quality of life.",
          imageSrc: "image13.jpg",
        },
        {
          title: "Incontinence Supplies",
          text: "Find incontinence supplies to ensure comfort and confidence.",
          imageSrc: "image14.jpg",
        },
        {
          title: "Foot Care",
          text: "Explore our foot care products to maintain healthy and comfortable feet.",
          imageSrc: "image15.jpg",
        },
        {
          title: "OTC (Vitamins, Skincare, Cough and Cold, etc)",
          text: "Our pharmacy carries a diverse selection of over-the-counter products, including vitamins, skincare, and cough and cold remedies, for your health and wellness needs.",
          imageSrc: "image16.jpg",
        },
        // Add more data for additional boxes if needed
      ];
      


    return (
        <div className="compounding-container">
            {/* Compounding Section */}
            <div className="compounding-title-box">
                <LandingHeader title={"Retail Pharmacy"} />
                <p>Retail Pharmacy Short message goes here.</p>
            </div>
            <div className="compounding-pair-boxes">{renderBoxes(pairedBoxData)}</div>
        </div>
    );
}

export default Compounding;
