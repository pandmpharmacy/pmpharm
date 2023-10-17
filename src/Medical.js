import LandingHeader from "./LandingHeader";
import "./Medical.css";

import Boxes from "./Boxes";

// IMAGES
const imageMap = {
  PharmacistAndLady: {
    jpg: require("../src/images/PharmacistAndLady.jpg"),
    webp: require("../src/images/PharmacistAndLady.webp"),
  },
  crutches: {
    jpeg: require("../src/images/MedicalEquipmentImages/crutches.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/crutches.webp"),
  },
  diabeticSupplies: {
    jpeg: require("../src/images/MedicalEquipmentImages/diabeticSupplies.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/diabeticSupplies.webp"),
  },
  bedAdjuster: {
    //jpeg: require("../src/images/MedicalEquipmentImages/bedAdjuster.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/bedAdjuster.webp"),
  },
  boot: {
    jpg: require("../src/images/MedicalEquipmentImages/boot.jpg"),
    webp: require("../src/images/MedicalEquipmentImages/boot.webp"),
  },
  gaitBelt: {
    //jpeg: require("../src/images/MedicalEquipmentImages/gaitBelt.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/gaitBelt.webp"),
  },
  grabBars: {
    //jpeg: require("../src/images/MedicalEquipmentImages/grabBars.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/grabBars.webp"),
  },
  nebulizers: {
    jpeg: require("../src/images/MedicalEquipmentImages/nebulizers.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/nebulizers.webp"),
  },
  ostomySupplies: {
    jpeg: require("../src/images/MedicalEquipmentImages/ostomySupplies.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/ostomySupplies.webp"),
  },
  // rasiedToiletSeat: {
  //   //jpg: require("../src/images/MedicalEquipmentImages/rasiedToiletSeat.jpg"),
  //   webp: require("../src/images/MedicalEquipmentImages/rasiedToiletSeat.webp"),
  // },
  reacher: {
    jpeg: require("../src/images/MedicalEquipmentImages/reacher.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/reacher.webp"),
  },
  scooter: {
    jpeg: require("../src/images/MedicalEquipmentImages/scooter.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/scooter.webp"),
  },
  soles: {
    jpeg: require("../src/images/MedicalEquipmentImages/soles.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/soles.webp"),
  },
  stocking: {
    jpeg: require("../src/images/MedicalEquipmentImages/stocking.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/stocking.webp"),
  },
  theraputicShoes: {
    jpeg: require("../src/images/MedicalEquipmentImages/theraputicShoes.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/theraputicShoes.webp"),
  },
  transferBench: {
    jpeg: require("../src/images/MedicalEquipmentImages/transferBench.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/transferBench.webp"),
  },
  transportChair: {
    jpeg: require("../src/images/MedicalEquipmentImages/transportChair.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/transportChair.webp"),
  },
  urinarySupplies: {
    jpeg: require("../src/images/MedicalEquipmentImages/urinarySupplies.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/urinarySupplies.webp"),
  },
  walker: {
    jpg: require("../src/images/MedicalEquipmentImages/walker.jpg"),
    webp: require("../src/images/MedicalEquipmentImages/walker.webp"),
  },
  wheelchair: {
    jpeg: require("../src/images/MedicalEquipmentImages/wheelchair.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/wheelchair.webp"),
  },
  woundcare: {
    jpeg: require("../src/images/MedicalEquipmentImages/woundcare.jpeg"),
    webp: require("../src/images/MedicalEquipmentImages/woundcare.webp"),
  },

  // Add more images as needed
};

function Medical() {
  // DATA

  const pairedBoxData = [
    {
      title: "Walkers",
      text: "Mobility aid for stability and support during walking.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Rollators",
      text: "Wheeled walkers with a seat and brakes for improved mobility and balance.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Transport chairs",
      text: "Lightweight and portable chairs for easy patient transport.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Wheelchair",
      text: "A device for people with mobility challenges to move independently.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Scooters",
      text: "Electric mobility devices designed for easy and comfortable travel.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Canes",
      text: "Single-pointed aids providing balance and support during walking.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Crutches",
      text: "Underarm or forearm devices used for weight-bearing assistance.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Transfer bench",
      text: "Bench for safe transfers in and out of a bathtub or shower.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Reachers",
      text: "Extended arm tools to help grab items out of reach.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Grab bars",
      text: "Wall-mounted bars for enhanced stability in bathrooms and other areas.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Elevated toilet seats",
      text: "Raised seats to ease toilet use for individuals with mobility issues.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Bath benches",
      text: "Shower and bath seats for comfortable and secure bathing.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Sitz bath",
      text: "Basin for sitz baths, useful for personal hygiene and soothing discomfort.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "3 in 1 commode",
      text: "Versatile commode with adjustable features for ease of use.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Bed wedges",
      text: "Wedge-shaped cushions for better sleep positioning and comfort.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Support stockings",
      text: "Compression hosiery to aid circulation and reduce swelling.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Walker boots",
      text: "Foot and ankle braces for injury recovery and support.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Gait belts",
      text: "Belts used by caregivers to assist patients with walking.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Orthotic supports",
      text: "Devices to provide extra support for knees, back, and ankles.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Maternity support",
      text: "Garments designed to provide comfort and support during pregnancy.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Daily living aids",
      text: "Various tools and devices to assist with daily tasks.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Wound care supplies",
      text: "Products for cleaning and dressing wounds.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Ostomy supplies",
      text: "Materials for individuals with colostomies or ileostomies.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Urinary supplies",
      text: "Equipment for managing urinary incontinence.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Diabetic supplies",
      text: "Products essential for managing diabetes.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Diabetic shoes",
      text: "Footwear specially designed for individuals with diabetes.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Therapeutic shoes",
      text: "Footwear designed for specific medical conditions.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Humidifiers",
      text: "Devices for adding moisture to the air to improve breathing and comfort.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      },
      {
      title: "Nebulizers and nebulizer accessories",
      text: "Equipment for delivering medication through inhalation.",
      border_hex: "#c01313",
      title_hex: "#c01313"
      }
    
    // Add more objects for additional boxes if needed
  ];

  return (
    <div className="medical_container">
      {/* medical Section */}
      <div className="medical-title-box">
        <LandingHeader title={"Medical Equipment"} />
        <p>At P&M Pharmacy, we are dedicated to the safety and healthcare of all our customers. As a trusted medical supply store Lake Worth has, we offer numerous medical supplies that are well-suited for your needs.</p>
      </div>
      <Boxes imageMap={imageMap} data={pairedBoxData} />
    </div>
  );
}

export default Medical;
