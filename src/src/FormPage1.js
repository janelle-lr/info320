import React from "react";
import "./FormPage1.css";

export const Formpage1 = () => {
  const backButtonClick = () => {
    // Add your desired functionality here, e.g., go back in history
    window.history.back();
  };
  return (
    <div className="form">
      <div className="form-v">
        <div className="form-title">Applicant Details</div>
        <div className="text-input1">
          <label htmlFor="firstName" className="div">
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="rectangle"
            placeholder="First Name"
            />
        </div>
        <div className="text-input">
          <label htmlFor="lastName" className="div">
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="rectangle-3"
            placeholder="Last Name"
          />
        </div>

        <div className="text-input2">
          <label htmlFor="organization" className="div">
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            className="rectangle-2"
            placeholder="Enter your organization"
          />
        </div>
        <div className="text-input3">
          <label htmlFor="address" className="div">
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="rectangle-2"
            placeholder="Enter your address"
          />
        </div>
        
        <div className="text-input4">
          <label htmlFor="email" className="div">
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="rectangle-4"
            placeholder="Enter your email"
          />
        </div>
        <div className="text-input5">
          <label htmlFor="cellPhone" className="div">
          </label>
          <input
            type="text"
            id="cellPhone"
            name="cellPhone"
            className="rectangle-5"
            placeholder="Enter your cell phone number"
          />
        </div>
        <div className="Next-button">
          <div className="overlap-group">
            <button type='button' className="Next" /*still need onclick for button*/>Next</button>
          </div>
        </div>
        <div className="Cancel-button">
          <div className="div-wrapper">
            <div className="cancel-text" onClick={backButtonClick}>Back</div>
          </div>
        </div>
        <div className="page-no" >2 of 5</div>
      </div>
    </div>
  );
};

export default Formpage1;