import "./HeroImage.css";
import React from "react";
import image from "../images/haweaWaveBanner.png";

const HeroImage = () => {
  return (
    <div>
      <section className="hero">
        <div className="frame">
          <img src={image} alt="Image of the Hawea River" className="image" />
          <div className="main-content overlay-text">
            <h1 className="header-h1">Hawea River</h1>
            <p className="pgraph-header-subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor. Contact is
              able to control the flow of Hawea River and Clutha river for
              electricity generation. Hawea river has an artificial wave that
              activates above a certain flow level.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroImage;
