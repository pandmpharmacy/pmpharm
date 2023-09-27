import React, { useState } from 'react';
import './Compounding.css'; // Import your CSS file

const Compounding = () => {
    // State to track whether Box 4 in the second instance is expanded
    const [isBox4Expanded, setIsBox4Expanded] = useState(false);

    // Function to toggle the expansion state
    const toggleBox4Expansion = () => {
        setIsBox4Expanded(!isBox4Expanded);
    };

    // Content for Box 4
    const box4Content = isBox4Expanded
        ? "New text when expanded."
        : "Discover Why We're Lake Worth's Leading Specialty Compounding Pharmacy.";

    return (
        <>
            {/* Top Title Box */}
            <div className="compounding top">
                <div className="child large">
                    <h1>Welcome to P&M Pharmacy</h1>
                    <h2>Your Trusted Source for Compounded Medications and Personalized Care.</h2>
                </div>
            </div>

            {/* Bottom Boxes - Instance 1 */}
            <div className="compounding bottom">
                <div className="child small">
                    <h3>Custom Compounded Prescriptions</h3>
                    <p>Tailored Medications to Suit Your Unique Needs.</p>
                </div>
                <div className="spacer"></div> {/* Spacer with 10px width */}
                <div className="child small">
                    <h3>Quality Compounding Services</h3>
                    <p>Experience Precision and Consistency in Every Prescription.</p>
                </div>
            </div>

            {/* Bottom Boxes - Instance 2 */}
            <div className="compounding bottom">
                <div className="child small">
                    <h3>Safe and Effective Compounding</h3>
                    <p>Your Health and Safety Are Our Top Priority</p>
                </div>
                <div className={`spacer`}></div>
                <div
                    className={`child small ${isBox4Expanded ? 'expanded' : ''}`}
                    onClick={toggleBox4Expansion}
                >
                    <h3>P&M Pharmacy Difference</h3>
                    <p>{box4Content}</p>
                    <div className="expand-button">
                        {isBox4Expanded ? (
                            <button>-</button>
                        ) : (
                            <button>+</button>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Boxes - Instance 3 */}
            <div className="compounding bottom">
                <div className="child small">
                    <h3>Same Day Service</h3>
                    <p>Get Your Compounded Prescriptions Faster and Easier.</p>
                </div>
                <div className="spacer"></div>
                <div className="child small">
                    <h3>Your Compounding Experts</h3>
                    <p>Decades of Experience for Your Medication Needs.</p>
                </div>
            </div>

            {/* Bottom Boxes - Instance 4 */}
            <div className="compounding bottom">
                <div className="child small">
                    <h3>Medication Personalization</h3>
                    <p>Tailoring Dosage Forms to Match Your Preferences.</p>
                </div>
                <div className="spacer"></div>
                <div className="child small">
                    <h3>Exclusion of Unnecessary Ingredients</h3>
                    <p>Medications Prepared with Your Allergies and Preferences in Mind.</p>
                </div>
            </div>

        </>
    );
};

export default Compounding;
