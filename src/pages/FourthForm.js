import React from 'react';
import './FourthForm.css';
import { Link } from "react-router-dom";


// Components
import "../components/Layout.css";
import "../components/Texts.css";
import NavigationBar from "../components/NavigationBar";
import Button from '../components/Button';


export const Formpage4 = () => {
  const backButtonClick = () => {
    // Add your desired functionality here, e.g., go back in history
    window.history.back();
  };
  return (
    <div className="form">
      <div className="form-v">
        < NavigationBar/>
        <div className="form-title"> Flow and Activity Details </div>
          <div className="form-title-secondary">Secondary Preference Flow Details</div>
            <div className="form-text">In case your preferred flow request gets declined, 
            please provide other suitable times and areas the activity can be undertake.</div>
  
        <div className="organization">
          <label htmlFor="organization" >
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            className="full-width"
            placeholder="Required flow/level range (e.g. 30 - 40 m&sup3;/s)"
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
            placeholder="Area of Request"
          />
        </div>
        
        <div className="email">
          <label htmlFor="email">
          </label>
          <input
            type="Date"
            id="email"
            name="email"
            className="email-width"
            placeholder="Start date & time (DD/MM/YYYY 00:00)"
          />
        </div>
        <div className="cell-number">
          <label htmlFor="cellPhone">
          </label>
          <input
            type="date"
            id="cellPhone"
            name="cellPhone"
            className="cell-width"
            placeholder="End date & time (DD/MM/YYYY 00:00)"
          />
        </div>

        {/* <div className="Next-button">
          <div className="overlap-group">
            <button type='button' className="Next"> Next</button>
          </div>
        </div>  */}

        <div className="Button">
          <Button variant="button-primary">
              <Link to="/FifthForm">
              Next
             </Link>
          </Button>
        </div>




        <div className="Cancel-button">
          <div className="div-wrapper">
            <div className="cancel-text" onClick={backButtonClick}>Back</div>
          </div>
        </div>
        <div className="page-no" >5 of 7</div>
      </div>
    </div>
  );
};

export default Formpage4;