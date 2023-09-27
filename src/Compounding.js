import React, { useState } from "react";
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
            imageSrc: "CompoundPills",
        },
        {
            title: "Your Trusted Compounding Pharmacy",
            text: "Discover the difference at P&M Pharmacy. Whether you require Hormone Replacement Therapy (HRT), Veterinary Compounding, Dermatology, Sports Medicine, Podiatry, Wound Care, Pediatrics, or any other personalized medication, we're here to meet your needs.",
            imageSrc: "PharmacistWithGel" // Replace with actual image URLs
        },
        {
            title: "Customized Dosage Forms",
            text: "We have decades of experience in compounding and can create customized dosage forms to suit your preferences and needs. Whether you need a transdermal gel, topical spray, or cosmetically appealing cream, we have you covered.",
            imageSrc: "WomanWithChild", // Replace with actual image URLs
        },
        {
            title: "Change, Combine, or Exclude Ingredients",
            text: "We can modify your medications in various ways, including changing the dosage form, altering the route of administration, creating combination preparations, and excluding specific ingredients to accommodate your unique circumstances.",
            imageSrc: "PillMaking",
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
            imageSrc: "SmallCatDog",
        },
        {
            title: "Transdermal Medication for Comfort",
            text: "P&M Pharmacy provides a wide range of medications compatible with transdermal bases. This delivery method is particularly beneficial for animals with conditions like hypertension or cardiovascular illness, as it minimizes stress. It also simplifies the medication process for pet owners who no longer have to struggle with medicating their animals. Additionally, we offer topical medications for localized inflammation or infection, ensuring your pet's comfort.",
            imageSrc: "High5Cat",
        },
        {
            title: "When Medications Are Unavailable",
            text: "In situations where specific medications become unavailable, pet owners often face challenges. Whether due to discontinued manufacturing or unavailability of veterinary formulations, the search for pet prescriptions near me can be frustrating. At P&M Pharmacy, we bridge this gap by compounding personalized dosage forms using pharmaceutical-grade ingredients, ensuring your pet receives the necessary treatment.",
            imageSrc: "ManCat", // Replace with actual image URLs
        },
        {
            title: "Combination Medications for Comprehensive Care",
            text: "Sometimes, treating multiple symptoms requires combining several medications. Dealing with separate containers can be costly and inconvenient. That's where P&M Pharmacy excels. We compound essential concentrations of compatible medications into a single, easy-to-use formulation. To simplify administration further, we offer various dosage forms, including medicated treats containing multiple drugs.",
            imageSrc: "DogSyringe", // Replace with actual image URLs
        },
        {
            title: "Trust P&M Pharmacy for all your pet's compounding needs. Contact us today to ensure your furry family members receive the personalized care they deserve. Your pets' well-being is our priority!",
            text: "",
            imageSrc: "DogMan", // Replace with actual image URLs
        }
        // Add more objects for additional boxes if needed
    ];

    const PeopleDermpairedBoxData = [
        {
            title: "Customized Skin Care for Your Unique Needs",
            text: "Welcome to P&M Pharmacy, your premier dermatology compounding pharmacy serving Wellington, Greenacres, and Lake Worth. We are committed to providing the highest quality care for all your dermatologic needs. Our skilled compounding pharmacists utilize cutting-edge technology and techniques to create compounded medications in a variety of forms, including cosmetically appealing creams, topical sprays, powders, and customized oral dosage forms such as flavored troches or lozenges. We also offer preparations for various routes of administration, ensuring convenience and improved adherence.",
            // imageSrc: "PharmacistAndLady", // You can omit the imageSrc if an image is not needed for this box
        },
        {
            title: "Comprehensive Dermatology Solutions",
            text: "At P&M Pharmacy, your trusted dermatology specialty pharmacy, our compounding pharmacists collaborate with your healthcare providers to prepare customized medications for a wide range of dermatological conditions, including:",
            imageSrc: "image2.jpg", // Replace with actual image URLs
        },
        {
            title: "Examples of Compounded Medications",
            text: "As a dermatology compounding pharmacy, we offer a diverse range of compounded medications to address various dermatological disorders. While the list below provides examples, please note that we can create custom formulations tailored to your therapy needs. Our offerings include:",
            imageSrc: "image3.jpg", // Replace with actual image URLs
        },
        {
            title: "Trust P&M Pharmacy for all your dermatological needs. Contact us today to discover how our customized skin care solutions can benefit you. Your skin's health and well-being are our top priorities!",
        }

        // Add more objects for additional boxes if needed
    ];

    const PeopleHRTpairedBoxData = [
        {
            title: "Your Path to Hormonal Balance Starts Here",
            text: "At P&M Pharmacy, we offer the best pricing for Hormone Replacement Therapy (HRT) that Palm Beach County trusts. We are committed to providing high-quality HRT solutions to help you achieve hormonal balance and improve your overall well-being.",
            // imageSrc: "PharmacistAndLady", // You can omit the imageSrc if an image is not needed for this box
        },
        {
            title: "Understanding Hormones",
            text: "Hormones are the body's regulatory messengers, influencing essential functions such as mood, metabolism, reproduction, and hunger. When hormones are in balance, our bodies function optimally.",
            imageSrc: "image2.jpg", // Replace with actual image URLs
        },
        {
            title: "Types of Hormones We Address",
            text: "Our HRT services cover a range of hormones, Learn More. Estrogens (Estrone, Estradiol, Estriol), Progesterone, Testosterone, DHEA (dehydroepiandrosterone, Bi-Est (Estriol + Estradiol), considered as one ingredient)",
            imageSrc: "image3.jpg", // Replace with actual image URLs
        },
        {
            title: "Do You Struggle with Hormone Imbalance?",
            text: "Hormonal imbalances can affect individuals of any age, leading to various symptoms. Women often experience imbalances during menopause, which can result in disruptive symptoms such as hot flashes, weight gain, mood swings, and more. Men may face hormonal imbalances during Andropause, marked by symptoms like low libido, fatigue, and mood changes.",
            imageSrc: "image5.jpg", // Replace with actual image URLs
            border_hex: "#eee",
            learnMore: [
                { 1: "sentence 1342" }, { 2: "second 22313242" }
            ]
        },
        {
            title: "Taking Action for Hormonal Health",
            text: "Don't let hormonal imbalances disrupt your life. At P&M Pharmacy, we offer Hormone Replacement Therapy (HRT) as a solution to restore balance. Whether you're seeking female hormone replacement therapy or hormone replacement therapy for males, you've come to the right place. As an HRT compounding pharmacy, P&M Pharmacy goes the extra mile. We can compound your hormone therapy in various forms, including capsules, creams, and troches, providing precise dosages tailored to your needs.",
            imageSrc: "image6.jpg", // Replace with actual image URLs
        },
        {
            title: "Benefits of Bioidentical Hormone Replacement Therapy (BHRT)",
            text: "BHRT offers a range of beenfits. Learn more: ",
            imageSrc: "image6.jpg", // Replace with actual image URLs
            border_hex: "#eee",
            learnMore: [
                { 1: "Improved energy levels" }, { 2: "Enhanced physiological well-being and mood" }, { 3: "Reduced hot flashes" }, { 4: "Improved sex drive" }, { 5: "Relief from vaginal dryness" }, { 6: "Enhanced erectile function" }, { 7: "Reduced riskof osteoperosis" }, { 8: "Effective management of menopausal symptoms" }
            ]

            // Replace with actual image URLs
        }
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

            {/* People Compounding Section */}
            <div className="compoundingDerm-title-box">
                <LandingHeader title={"Dermatology Compounding"} />
                <p>Human Compounding Short message goes here.</p>
            </div>
            <div className="compounding-pair-boxes">{renderBoxes(PeopleDermpairedBoxData)}</div>
            <div className="compoundingHRT-title-box">
                <LandingHeader title={"Hormone Replacement Therapy Compounding"} />
                <p>HRT Compounding Short message goes here.</p>
            </div>
            <div className="compounding-pair-boxes">{renderBoxes(PeopleHRTpairedBoxData)}</div>
        </div>
    );
}

export default Compounding;
