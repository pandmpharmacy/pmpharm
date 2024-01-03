import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BodyComponent from "./BodyComponent";
import Compounding from "./Compounding";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import RetailPharm from './RetailPharm';
import PetPharm from './PetPharm';
//import Immunization from './Immunization';
import PrayerTimesTest from './PrayerTimesTest';
import Medical from './Medical';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <PrayerTimesTest/>
        {/* <Router> */}
        {/* <HeaderComponent />
        <Routes>
          <Route path="/" element={<BodyComponent />} />
          <Route path="/compounding" element={<Compounding />} />
          <Route path="/retail" element={<RetailPharm />} />
          <Route path="/pet" element={<PetPharm />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/Immunization" element={<PrayerTimesTest />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <FooterComponent /> */}
    {/* </Router> */}
      </div>
  );
}

export default App;
