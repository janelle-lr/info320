import React from "react";
import "./intialForm.css";

// Components
import "../components/Layout.css";
import "../components/Texts.css";
import BottomButtons from "../components/FormButtons";
import logo from "../images/contactLogo.png";

export const Formpage3 = () => {
  return (
    <div className="request-form">
      <div className="first-form main-content">
        <img src={logo} className="form-contact-logo" />
        <h1 className="form-heading">Flow and Activity Details</h1>
        <form className="container label-invisible">
          <div className="row">
            <label htmlFor="firstName">First Name</label>
            <input className="text-box five-twelfths" type="text" name="firstName" placeholder="First Name" />
            <label htmlFor="lastName">Last Name</label>
            <input className="text-box seven-twelfths" type="text" name="lastName" placeholder="Last Name" />
          </div>
          
          <label htmlFor="organization">Organization</label>
          <input className="text-box full-width" type="text" name="organization" placeholder="Organization" />
          
          <label htmlFor="address">Address</label>
          <input className="text-box full-width" type="text" name="address" placeholder="Full Address" />

          <div className="row">
            <label htmlFor="email">Email</label>
            <input className="text-box seven-twelfths" type="email" name="email" placeholder="Email" />
            
            <label htmlFor="phoneNumber">Mobile Number</label>
            <input className="text-box five-twelfths" type="tel" name="phoneNumber" placeholder="Mobile Number" />
          </div>

          <label htmlFor="qualifications">Qualifications</label>
          <input className="text-box full-width" type="text" name="qualifications" placeholder="Qualifications" />
        </form>

        <BottomButtons page="4" leftButton="Back" leftButtonDest="/SecondForm" rightButton="Next" rightButtonDest="/FourthForm" />
      </div>
    </div>
  );
};

export default Formpage3;