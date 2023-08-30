import React from "react";
import "../../App.css";
import { Button } from "../../components/Button";
import "./Hero_Section.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        // src="/videos/iStock-1310742509.mp4"
        src="https://elasticbeanstalk-eu-north-1-643287291923.s3.eu-north-1.amazonaws.com/iStock-1310742509.mp4"
        autoPlay
        loop
        muted
      />
      <div className="hero-title-container">
        <h1 className="hero-h1">Empowering Solutions Through </h1>
        <h1 className="hero-h1">Insightful Analytics</h1>
      </div>
      <h2 className="hero-h2">Data Science Solutions by Ludovic Gardy, Ph.D. </h2>
      <h2 className="hero-h2" style={{marginTop:'0px'}}>Serving France & Beyond</h2>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--reverse"
          buttonSize="btn--large"
          redirection="/about"
        >
          HISTORY
        </Button>
        <Button
          className="btns" 
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          redirection="/data-science"
        >
          DATA SCIENCE 
          {/* <i className="far fa-play-circle" /> */}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
