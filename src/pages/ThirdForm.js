import React from "react";

// Components
import BottomButtons from "../components/FormButtons";
import logo from "../images/contactLogo.png";
import './intialForm.css';
import { Link } from "react-router-dom";
// import Dropdown from '../components/Dropdown.js';
// import Calander from '../components/Calander.js';
import "../components/Layout.css";
import "../components/Texts.css";
import NavigationBar from "../components/NavigationBar";
import FormButton from '../components/FormButtons.js';
import Button from '../components/Button';

export const Formpage3 = () => {
  return (
    <div className="request-form">
      <div className="third-form main-content">
        <img src={logo} className="form-contact-logo" />
        <h1 className="form-heading">Flow and Activity Details</h1>
        <h2 className="form-title-secondary">First Preference Flow Details</h2>

        <form className="container">
          <div className="label-invisible">
            <label htmlFor="flowLevel">Required flow/level range (e.g. 30 - 40 m&sup3;/s)</label>
            <input type="text" name="flowLevel" className="text-box full-width" placeholder="Required flow/level range (e.g. 30 - 40 m&sup3;/s)" />

            <label htmlFor="requestArea">Area of Request</label>
            <input type="text" name="requestArea" className="text-box full-width" placeholder="Area of Request" />
          </div>

          <div className="row">
            <label htmlFor="startDateTime">Start date & time</label>
            <input type="datetime-local" name="startDateTime" className="text-box six-twelfths calander" placeholder="Start date & time (DD/MM/YYYY 00:00)" />

            <label htmlFor="endDateTime">End date & time</label>
            <input type="datetime-local" name="endDateTime" className="text-box six-twelfths calander" placeholder="End date & time (DD/MM/YYYY 00:00)" />
          </div>
        </form>
        <br />
        <form className="container">
          <div className="label-invisible">
            <h2 className="form-title-secondary">Activity Details</h2>
            <label htmlFor="activityDetails">Brief activity description</label>
            <textarea type="text" name="activityDetails" className="text-box full-width" placeholder="Brief activity description" />
           
            <div className="row">
              <label htmlFor="participants">Brief participant(s) description</label>
              <input className="text-box eight-twelfths" type="text" name="participants" placeholder="Brief participant(s) description" />
              
              <label htmlFor="participantNum">Number of Participants</label>
              <input className="text-box four-twelfths" type="number" name="participantNum" placeholder="Number of Participants" />
            </div>
          </div>
        </form>

        <BottomButtons page="4" leftButton="Back" leftButtonDest="/SecondForm" rightButton="Next" rightButtonDest="/FourthForm" />
      </div>
    </div>
  );
};

export default Formpage3;