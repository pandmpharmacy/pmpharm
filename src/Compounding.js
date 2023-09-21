import React from 'react';
import './Compounding.css'; // Import your CSS file
import logoWebp from "../src/logo.webp";
import logoPng from "../src/PMLOGO.png";
const Compounding = () => {
    return (
        <>
            {/* first parent div */}
            <div className="compounding">
                <div className="child retail">
                    <h4>Retail</h4>
                    <p>Some retail content..Some retail content..Some retail content..Some retail content..Some retail retail conten.</p>

                </div>
                <div className="child pet">
                    <h4>Pet</h4>
                    <p>Some retail content..Some retail content..Some retail content..Some retail content..Some retail retail conten.</p>

                </div>
            </div>
            {/* second parent div */}
            <div className="compounding">
                <div className="child retail">
                    <h4>Retail</h4>
                    <p>Some retail content..Some retail content..Some retail content..Some retail content..Some retail retail conten.</p>

                </div>
                <div className="child pet">
                    <h4>Pet</h4>
                    <p>Some retail content..Some retail content..Some retail content..Some retail content..Some retail retail conten.</p>

                </div>
            </div>
        </>
    );
};

export default Compounding;
