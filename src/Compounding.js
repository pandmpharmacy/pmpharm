import React, { useState } from 'react';
import './Compounding.css'; // Import your CSS file
import logoWebp from "../src/logo.webp";
import logoPng from "../src/PMLOGO.png";

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
        : "Some content for the fourth small box";

    return (
        <>
            {/* Top Title Box */}
            <div className="compounding top">
                <div className="child large">
                    <h4>Title</h4>
                    <p>Some content for the top box.</p>
                </div>
            </div>

            {/* Bottom Boxes - Instance 1 */}
            <div className="compounding bottom">
                <div className="child small">
                    <h4>Box 1</h4>
                    <p>Some content for the first small box.</p>
                </div>
                <div className="spacer"></div> {/* Spacer with 10px width */}
                <div className="child small">
                    <h4>Box 2</h4>
                    <p>Some content for the second small box.</p>
                </div>
            </div>

            {/* Bottom Boxes - Instance 2 */}
            <div className="compounding bottom">
                <div className="child small">
                    <h4>Box 3</h4>
                    <p>Some content for the third small box.</p>
                </div>
                <div className={`spacer`}></div>
                <div
                    className={`child small ${isBox4Expanded ? 'expanded' : ''}`}
                    onClick={toggleBox4Expansion}
                >
                    <h4>Box 4</h4>
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
                    <h4>Box 5</h4>
                    <p>Some content for the fifth small box.</p>
                </div>
                <div className="spacer"></div>
                <div className="child small">
                    <h4>Box 6</h4>
                    <p>Some content for the sixth small box.</p>
                </div>
            </div>

            {/* Bottom Boxes - Instance 4 */}
            <div className="compounding bottom">
                <div className="child small">
                    <h4>Box 7</h4>
                    <p>Some content for the seventh small box.</p>
                </div>
                <div className="spacer"></div>
                <div className="child small">
                    <h4>Box 8</h4>
                    <p>Some content for the eighth small box.</p>
                </div>
            </div>

            {/* Bottom Boxes - Instance 5 */}
            <div className="compounding bottom">
                <div className="child small">
                    <h4>Box 9</h4>
                    <p>Some content for the ninth small box.</p>
                </div>
                <div className="spacer"></div>
                <div className="child small">
                    <h4>Box 10</h4>
                    <p>Some content for the tenth small box.</p>
                </div>
            </div>
        </>
    );
};

export default Compounding;
