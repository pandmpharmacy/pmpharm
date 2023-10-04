import React, { useState } from 'react'; // Import useState
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Boxes.css";

function Boxes({ data, imageMap }) {
    const [activeBox, setActiveBox] = useState(null);

    const toggleBoxContent = (index) => {
        if (activeBox === index) {
            setActiveBox(null);
        } else {
            setActiveBox(index);
        }
    };

    // Remove the extra '}' here
    return (
        <div className="boxes-container">
            {data.map((item, index) => (
                <div

                    key={index}
                    style={{
                        gridArea: `box${index + 1}`,
                        marginBottom: '20%',
                    }}
                >
                    <div>
                        <h2
                            key={index}
                            style={{
                                color: item.title_hex,
                                marginBottom: '4%',
                                textAlign: 'left',
                                fontWeight: 900,
                                fontSize: '28px',
                            }}
                        >
                            {item.title}
                        </h2>
                    </div>
                    <div className="content_wrapper">
                        <div
                            className="medical_box"
                            style={{
                                gridArea: `box${index + 1}`,
                                backgroundImage: `url(${imageMap[item.imageSrc]?.webp})`, // Conditional background image setting
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        ></div>
                        <div>
                            {activeBox === index && item.learnMore ? (
                                <ul>
                                    {item.learnMore.map((sentenceObj, idx) => (
                                        <li id="learn_more" key={idx}>
                                            {Object.values(sentenceObj)[0]}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <>
                                    <p className="medical_text">{item.text}</p>
                                </>
                            )}
                            {item.learnMore && (
                                <button
                                    className={activeBox === index ? 'active' : ''}
                                    onClick={() => toggleBoxContent(index)}
                                    style={{
                                        border: 'none',
                                        background: activeBox === index ? item.title_hex : '#fff',
                                        borderRadius: 5,
                                        color: activeBox === index ? '#fff' : item.title_hex,
                                        fontSize: '26px',
                                        margin: '2%',
                                    }}
                                >
                                    {activeBox === index ? (
                                        <FontAwesomeIcon icon={faTimes} />
                                    ) : (
                                        <FontAwesomeIcon icon={faPlus} />
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Boxes;
