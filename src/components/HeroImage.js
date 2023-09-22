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
            Contact Energy is able to control the flow of Hāwea River for electricity generation can approve flow requests for various community activities on the river. The Wave is an ideal playground for kayak, white water, body boarding and surfing enthusiasts, the Hāwea Whitewater Park was purpose built on the Hāwea River at Camphill Bridge.
            <br /><br />
            The Wave is ideal for kayaking, white water rafting, body boarding and surfing, and includes two features: a smaller top wave suitable for shorter boats and boards, and a bigger and steeper bottom wave for more experienced watersport goers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroImage;
