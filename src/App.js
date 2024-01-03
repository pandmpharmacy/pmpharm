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
        <PrayerTimesTest />
      </div>
  );
}

export default App;
