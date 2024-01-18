import React from "react";
import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Projects</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, ipsa accusamus. Fugit ipsa inventore unde nesciunt velit itaque minima labore quis sapiente voluptas mollitia at eaque, magni a vitae impedit?</p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="womand and browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
