import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BodyComponent from "./BodyComponent";
import Compounding from "./Compounding";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        
        {/* Routes go here */}
        <Routes>
          <Route path="/" element={<BodyComponent />} />

          {/* SO WHEN YOU CREATE A NEW FILE YOU CAN PLACE THIS HERE IN BETWEEN THE <ROUTES></ROUTES> AND attach the path to it 
          so for here if you go localhost:3000/compounding.  */}
          
          <Route path="/compounding" element={<Compounding />} />
        </Routes>
        
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
