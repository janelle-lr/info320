<<<<<<< HEAD
import React from "react";

// Components
import BottomButtons from "../components/FormButtons";
import logo from "../images/contactLogo.png";
=======
import React from 'react';
import './intialForm.css';
import { Link } from "react-router-dom";
import Dropdown from '../components/Dropdown.js';
import Calander from '../components/Calander.js';




// Components
import "../components/Layout.css";
import "../components/Texts.css";
import NavigationBar from "../components/NavigationBar";
import FormButton from '../components/FormButtons.js';
import Button from '../components/Button';

>>>>>>> 18a650ca09bb8e194b0ef2f0c09f32c0ffb8eacc

export const Formpage3 = () => {
  return (
<<<<<<< HEAD
    <div className="request-form section-container">
      <div className="first-form main-content">
        <img src={logo} className="form-contact-logo" />
        <h1 className="form-heading">Flow and Activity Details</h1>
        <h2 className="form-title-secondary">First Preference Flow Details</h2>

        <form className="container">
          <div className="label-invisible">
            <label htmlFor="flowLevel">Required flow/level range (e.g. 30 - 40 m&sup3;/s)</label>
            <input type="text" name="flowLevel" className="text-box full-width" placeholder="Required flow/level range (e.g. 30 - 40 m&sup3;/s)" />
=======
    <div className="form">
      <div className="form-v">
        < NavigationBar/>
        <div className="form-title1"> Form and Activity Details</div>
        <div className="FristPreference">First Preference Flow Details</div>

        <div className="FlowRange">
          <label htmlFor="FlowRange" >
          </label>
          <input
            type="text"
            id="FlowRange"
            name="FlowRange"
            className="full-width"
            placeholder="Required Flow/Level & Range (e.g. 30 - 40 m&sup3;/s) "
          />

        </div>
        <div className="AreaReq">
          <label htmlFor="AreaReq">
          </label>
          <Dropdown/>
        </div>

        {/* < Calander/> */}

        <div className="calander">
          <label htmlFor="calander" >
          </label>
          <input
            type="datetime-local"
            id="calander"
            name="calander"
            className="full-width1"
            placeholder=""
          />

        </div>



        
        <div className="ActivityDetails">Activity Details</div>

        <div className="Breif">
          <label htmlFor="Breif" >
          </label>
          <textarea
            type="text"
            id="Breif"
            name="Breif"
            className="full-width"
            placeholder="Breif activity description"
          />


        </div>
        
        <div className="particpants">
          <label htmlFor="particpants">
          </label>
          <input
            type="particpants"
            id="particpants"
            name="particpants"
            className="email-width"
            placeholder="Breif particpant(s) description"
          />
        </div>
        <div className="NoParticpants">
          <label htmlFor="NoParticpants">
          </label>
          <input
            type="number"
            id="NoParticpants"
            name="NoParticpants"
            className="cell-width"
            placeholder="Enter number of particpants"
          />
        </div>
>>>>>>> 18a650ca09bb8e194b0ef2f0c09f32c0ffb8eacc

            <label htmlFor="requestArea">Area of Request</label>
            <input type="text" name="requestArea" className="text-box full-width" placeholder="Area of Request" />
          </div>
<<<<<<< HEAD

          <div className="row">
            <label htmlFor="startDateTime">Start date & time</label>
            <input type="datetime-local" name="startDateTime" className="text-box six-twelfths" placeholder="Start date & time (DD/MM/YYYY 00:00)" />
=======
        </div>  */}
        <FormButton  page="3" leftButton="Back" leftButtonDest="/SecondForm" rightButton="Next" rightButtonDest="/FourthForm" />

        <div className="Button">
          <Button variant="button-primary">
              <Link to="/intialForm">
              Next
             </Link>
          </Button>
        </div>
>>>>>>> 18a650ca09bb8e194b0ef2f0c09f32c0ffb8eacc

            <label htmlFor="endDateTime">End date & time</label>
            <input type="datetime-local" name="endDateTime" className="text-box six-twelfths" placeholder="End date & time (DD/MM/YYYY 00:00)" />
          </div>
        </form>

        <BottomButtons page="4" leftButton="Back" leftButtonDest="/SecondForm" rightButton="Next" rightButtonDest="/FourthForm" />
      </div>
    </div>
  );
};

export default Formpage3;