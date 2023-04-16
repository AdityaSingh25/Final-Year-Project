import React from "react";

import { Button } from "../Button/Button";
import "./Herosection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>COURT CASE USING BLOCKCHAIN</h1>
      
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          TRANSPERANCY
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
