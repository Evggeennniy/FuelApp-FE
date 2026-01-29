import React, { useState } from "react";
import "./TubButtons.css";

const TubButtons = () => {
  const [activeButton, setActiveButton] = useState(0);
  const buttons = ["Купити собі", "Купити другові"];

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="tub-switcher-container">
      <div className="tub-switcher">
        {buttons.map((label, index) => (
          <button
            key={index}
            className={`tub-button rounded-lg ${activeButton === index ? "active" : ""}`}
            onClick={() => handleButtonClick(index)}
          >
            <span className="button-content">{label}</span>
          </button>
        ))}
      </div>

      <div>
        {/* <h3>Selected: {buttons[activeButton]}</h3> */}
        <div>
          {activeButton === 0 ? (
            <div className="content-option"></div>
          ) : (
            <div className="content-option"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TubButtons;
