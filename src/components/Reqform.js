import "./Reqform.css";
import React from "react";
import logo from "../images/contactLogo.png";

const Form = () => {
  return (
    <div className="form">
      <div className="form-sub">
        <div className="header">
          <img src={logo} className="image" />
        </div>
      </div>
    </div>
  );
};

export default Form;
