// ScrollButtons.jsx
import React from "react";
import "./ScrollButtons.css";
import { ChevronUp, ChevronDown } from "lucide-react";

const ScrollButtons = () => {
  const handleScroll = (direction) => {
    const scrollValue = direction === "up" ? -window.innerHeight / 2 : window.innerHeight / 2;
    window.scrollBy({ top: scrollValue, behavior: "smooth" });
  };

  return (
    <div className="scroll-buttons">
      <button className="scroll-button" onClick={() => handleScroll("up")} aria-label="Scroll Up">
        <ChevronUp size={24} />
      </button>
      <button className="scroll-button" onClick={() => handleScroll("down")} aria-label="Scroll Down">
        <ChevronDown size={24} />
      </button>
    </div>
  );
};

export default ScrollButtons;
