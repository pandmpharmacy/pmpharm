

import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Boxes.css";

function LazyImage({ src, alt }) {
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(containerRef.current);
          }
        });
      });
  
      observer.observe(containerRef.current);
  
      return () => {
        observer.unobserve(containerRef.current);
      };
    }, []);
  
    return (
      <div
        ref={containerRef}
        className="medical_box"
        style={{
          backgroundImage: isVisible ? `url(${src})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {isVisible && <img ref={imgRef} src={src} alt={alt} style={{ display: 'none' }} />}
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
