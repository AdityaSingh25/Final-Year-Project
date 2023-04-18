import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Herosection.css";

function HeroSection() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/transparency");
  };
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>COURT CASE USING BLOCKCHAIN</h1>

      <div className="hero-btns">
        <Link
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          to="/transparency"
        >
          TRANSPERANCY
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
