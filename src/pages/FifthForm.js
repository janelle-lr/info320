import React from 'react';
import './intialForm.css';
import { Link } from "react-router-dom";


// Components
import "../components/Layout.css";
import "../components/Texts.css";
import NavigationBar from "../components/NavigationBar";
import Button from '../components/Button';


export const Formpage5 = () => {
  const backButtonClick = () => {
    // Add your desired functionality here, e.g., go back in history
    window.history.back();
  };
  return (
    <div className="form">
      <div className="form-v">
        < NavigationBar/>
        <div className="form-title"> JANELLE YOURS</div>
        
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
            placeholder="Enter your cell phone number"
          />
        </div>

        {/* <div className="Next-button">
          <div className="overlap-group">
            <button type='button' className="Next"> Next</button>
          </div>
        </div>  */}

        <div className="Button">
          <Button variant="button-primary">
              <Link to="/Conformation">
              Next
             </Link>
          </Button>
        </div>




        <div className="Cancel-button">
          <div className="div-wrapper">
            <div className="cancel-text" onClick={backButtonClick}>Back</div>
          </div>
        </div>
        <div className="page-no" >6 of 7</div>
      </div>
    </div>
  );
};

export default Formpage5;