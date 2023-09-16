import React from "react";
import "./FifthForm.css";
import { Link } from "react-router-dom";

// Components
import "../components/Layout.css";
import "../components/Texts.css";
import Button from "../components/Button";
import logo from "../images/contactLogo.png";
import BottomButtons from "../components/FormButtons"

export const Formpage5 = () => {
  return (
    <div className="request-form">
      <div className="fifth-form main-content">
        <img src={logo} className="form-contact-logo" />
        <h1 className="form-heading">Health and Safety</h1>
        <form>
          <input
            className="checkbox"
            type="checkbox"
            name="riverFreq"
            value=""
          />
          <label className="label-visible" for="riverFreq"> Have you been down the river before?</label>
          <br />
          <input
            className="checkbox"
            type="checkbox"
            name="riverHazard"
            value=""
          />
          <label for="riverHazard">
            Have you considered the hazards on the river?
          </label>
          <br />
          <input className="checkbox" type="checkbox" name="hsePlan" value="" />
          <label for="hsePlan"> Do you have an HSE plan?</label>
          <br />
        </form>

        <BottomButtons page="6" leftButton="Back" leftButtonDest="/FourthForm" rightButton="Submit" rightButtonDest="/Conformation" />
      </div>
    </div>
  );
};

export default Formpage5;
