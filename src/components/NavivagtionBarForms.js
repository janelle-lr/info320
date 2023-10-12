import React from "react";
import "../pages/Form.css";
import contactLogo from "../images/contactLogo.png";

// This the nav bar for the forms in the dev - click on the logo to take back home - same css is used for all of the pages
const NavigationBarForm = () => {
  return (
    <div className="navigation form-nav">
      <a href="/">
        <img
          className="form-contact-logo"
          src={contactLogo}
          alt="Contact Energy Logo"
        />
      </a>
    </div>
  );
};

export default NavigationBarForm;
