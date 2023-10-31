

import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Boxes.css";

function LazyImage({ src, alt, placeholder }) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!('IntersectionObserver' in window)) {
            require('intersection-observer');
        }

        const observerOptions = {
            rootMargin: '0px',
            threshold: 0.1 // Adjust this value based on when you want the image to load
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Disconnect the observer when it’s no longer needed
                }
            });
        }, observerOptions);

        observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="medical_box"
            style={{
                backgroundImage: isVisible ? `url(${src})` : `url(${placeholder})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* This img tag ensures that the image can be indexed by search engines and is accessible, but it's visually hidden */}
            {/* isVisible && <img src={src} alt={alt} style={{ display: 'none' }} /> */}
        </div>
    );
}





function Boxes({ data, imageMap }) {
    const [activeBox, setActiveBox] = useState(null);

    const toggleBoxContent = (index) => {
        if (activeBox === index) {
            setActiveBox(null);
        } else {
            setActiveBox(index);
        }
    };

    return (
        <div className="boxes-container">
            {data.map((item, index) => (
                <div
                    key={index}
                    style={{
                        gridArea: `box${index + 1}`,
                        marginBottom: '1%',
                    }}
                >
                    <div>
                        <h2
                            id="boxes_subtitle"
                            key={index}
                            style={{
                                color: item.title_hex,
                                marginBottom: '4%',
                                textAlign: 'left',
                                fontWeight: 900,

                            }}
                        >
                            {item.title}
                        </h2>
                    </div>
                    <div className="content_wrapper">
                        <LazyImage src={imageMap[item.imageSrc]?.webp} alt={item.title} />
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
