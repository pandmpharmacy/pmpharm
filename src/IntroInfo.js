import React from "react";
import "./IntroInfo.css";
/*import logo from "../src/PMLOGO.png"; */

function IntroInfo() {
  return (
    <div className="service-container">
      <div>
        <div className="service-box">
          <h3 id= 'alert'>At P&M Pharmacy, we believe in putting your health and well-being first, and our online platform is designed with your convenience in mind.</h3>
          {/* <button className="box_button">More</button> */}
        </div>
      </div>
      <div>
        <div className="service-box">
        <h3 id= 'alert'>Whether you're looking for prescription medications, over-the-counter remedies, or expert health advice, you've come to the right place.</h3>
          {/* <button className="box_button">More</button> */}
        </div>
      </div>
      <div>
        <div className="service-box">
        <h3 id= 'alert'> Our team of experienced pharmacists and healthcare professionals is here to support you on your journey to better health.</h3>
          {/* <button className="box_button">More</button> */}
        </div>
      </div>
      <div>
        <div className="service-box">
        <h3 id= 'alert'> We look forward to serving you with the same dedication and care that has made us a community favorite.</h3>
          {/* <button className="box_button">More</button> */}
        </div>
      </div>
    </div>
  );
}

export default IntroInfo;
