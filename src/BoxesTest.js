import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Boxes.css";

function LazyImage({ src, alt }) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentContainerRef = containerRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentContainerRef);
        }
      });
    });

    observer.observe(currentContainerRef);

    return () => {
      observer.unobserve(currentContainerRef);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`medical_box ${isVisible ? 'visible' : ''}`}
    >
      {isVisible && <img ref={imgRef} src={src} alt={alt} />}
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
          key={item.id} // Use a unique identifier as the key
          style={{
            gridArea: `box${index + 1}`,
            marginBottom: '20%',
          }}
        >
          <div>
            <h2
              id="boxes_subtitle"
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
                <p className="medical_text">{item.text}</p>
              )}
              {item.learnMore && (
                <button
                  className={` ${activeBox === index ? 'active' : ''}`}
                  onClick={() => toggleBoxContent(index)}
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
