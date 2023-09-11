import "./Layout.css";
import React from "react";

const ThreeColumn = ({ title, subtext, image }) => {
  return (
    <div className="layout-column">
      <div className="three-columns">
        <img src={image} alt="Hero Image" />
        <h3>{title}</h3>
        <p>{subtext}</p>
      </div>
    </div>
  );
};

export default ThreeColumn;
