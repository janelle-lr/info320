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


export const Formpage3 = () => {
  const backButtonClick = () => {
    // Add your desired functionality here, e.g., go back in history
    window.history.back();
  };
  return (
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

        {/* <div className="Next-button">
          <div className="overlap-group">
            <button type='button' className="Next"> Next</button>
          </div>
        </div>  */}
        <FormButton  page="3" leftButton="Back" leftButtonDest="/SecondForm" rightButton="Next" rightButtonDest="/FourthForm" />

        <div className="Button">
          <Button variant="button-primary">
              <Link to="/intialForm">
              Next
             </Link>
          </Button>
        </div>




        <div className="Cancel-button">
          <div className="div-wrapper">
            <div className="cancel-text" onClick={backButtonClick}>Back</div>
          </div>
        </div>
        <div className="page-no" >4 of 7</div>
      </div>
    </div>
  );
};

export default Formpage3;