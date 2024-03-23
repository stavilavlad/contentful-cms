import React from "react";
import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>My Portfolio</h1>
          <p>This is a simple website to showcase my portofolio. Take a look!</p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="womand and browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
