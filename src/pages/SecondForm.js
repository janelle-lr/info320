import React from 'react';
import './intialForm.css';
import { Link } from "react-router-dom";


// Components
import "../components/Layout.css";
import "../components/Texts.css";
import NavigationBar from "../components/NavigationBar";
import FormButton from '../components/FormButtons.js';



export const Formpage2 = () => {

  return (
    <div className="form">
      <div className="form-v">
        < NavigationBar/>
        <div className="form-title"> Trip Leader</div>
        
        <div className="firstName">
          <label htmlFor="firstName">
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="half-width"
            placeholder="First Name"
            />
        </div>
        
        <div className="text-input">
          <label htmlFor="lastName">
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="last-name"
            placeholder="Last Name"
          />
        </div>

        <div className="organization">
          <label htmlFor="organization" >
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            className="full-width"
            placeholder="Enter your organization"
          />
        </div>
        <div className="address">
          <label htmlFor="address">
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="full-width"
            placeholder="Enter your address"
          />
        </div>
        
        <div className="email">
          <label htmlFor="email">
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="email-width"
            placeholder="Enter your email"
          />
        </div>
        <div className="cell-number">
          <label htmlFor="cellPhone">
          </label>
          <input
            type="number"
            id="cellPhone"
            name="cellPhone"
            className="cell-width"
            placeholder="Cell phone number"
          />
        </div>

        <div className="Qualifications">
          <label htmlFor="Qualifications">
          </label>
          <input
            type="Text"
            id="email"
            name="Qualifications"
            className="full-width"
            placeholder="Qualifications"
          />
        </div>

        {/* <div className="Next-button">
          <div className="overlap-group">
            <button type='button' className="Next"> Next</button>
          </div>
        </div>  */}

<FormButton  page="2" leftButton="Back" leftButtonDest="/intialForm" rightButton="Next" rightButtonDest="/ThirdForm" />


        

      
      </div>
    </div>
  );
};

export default Formpage2;