import React, { useState, useEffect } from "react";

// Components
import "../components/Layout.css";
import "../components/Texts.css";
// Components
import logo from "../images/contactLogo.png";
import BottomButtons from "../components/FormButtons";
import NavigationBarForms from "../components/NavivagtionBarForms.js";
import Button from '../components/Button';
import Dropdown from "../components/Dropdown";

export const Formpage4 = () => {
  const [formData4, setFormData4, selectedValue] = useState({
    flowLevel: "",
    startDateTime: "",
    endDateTime: ""
  });

  const [errors, setErrors] = useState({});

  // setting out the error validation prompts for each of the feilds where an input is required to be filled in 
  
    const validateForm = () => {
      const newErrors = {};
      if (!formData4.flowLevel) {
        newErrors.flowLevel = "Flow level is required";
      }
      if (!formData4.startDateTime) {
        newErrors.startDateTime = "Start date time is required";
      }
      if (!formData4.endDateTime) {
        newErrors.endDateTime = "End date time is required";
      }

      
      return newErrors;
    };
  
  
  // nextClick triggers the repsonse from the next button at the button 
  
  const nextClick = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Validation passed, navigate to the next form page
      // You can also submit the form data to your server here
      // For now, let's print the data to the console
      console.log(formData4);
  
      // Reset the errors state to clear error messages
      setErrors({});
      saveFormData4();
      window.location.href = "/FifthForm";
    } else {
      // Validation failed, set the errors state to display error messages
      setErrors(newErrors);
    }
  };
  
    // Load saved form data from localStorage when the component mounts
    useEffect(() => {
      const savedFormData4 = JSON.parse(localStorage.getItem("formData4")) || {};
      setFormData4(savedFormData4);
    }, []); // The empty dependency array ensures this effect runs once when the component mounts
  
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData4({ ...formData4, [name]: value });
  };
  

  
  const saveFormData4 = () => {
    try {
      localStorage.setItem("formData4", JSON.stringify(formData4));
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
    }
  };
  
  return (
    

    <div className="request-form section-container">
      <NavigationBarForms/>
      <div className="first-form main-content">
        <h1 className="form-heading">Flow and Activity Details</h1>
        <h2 className="form-title-secondary">Secondary Preference Flow Details</h2>
        <p className="form-paragraph">In case your preferred flow request gets declined, please provide other suitable times and areas the activity can be undertake.</p>


        <form className="container">
          <div className="label-invisible">

          <label htmlFor="flowLevel">
              Required flow/level range (e.g. 30 - 40 m&sup3;/s)
            </label>
            <input
              type="text"
              name="flowLevel"
              className="text-box full-width"
              placeholder="Required flow/level range (e.g. 30 - 40 m&sup3;/s)"
              value={formData4.flowLevel}
              onChange={handleChange}
            />
            
            </div>
            {errors.flowLevel && (
              <div className="error-message">{errors.flowLevel}</div>
            )}

            <Dropdown />

            

          <div className="row">
            <label htmlFor="startDateTime">Start date & time</label>
            <input type="datetime-local" name="startDateTime" className="text-box six-twelfths" placeholder="Start date & time (DD/MM/YYYY 00:00)" 
            value={formData4.startDateTime}
            onChange={handleChange}
            />

            <label htmlFor="endDateTime">End date & time</label>
            <input type="datetime-local" name="endDateTime" className="text-box six-twelfths" placeholder="End date & time (DD/MM/YYYY 00:00)" 
            value={formData4.endDateTime}
            onChange={handleChange}
            />
          </div>

          <div className="row">
          {errors.startDateTime && (
            <div className="error-message six-twelfths">{errors.startDateTime}</div>
          )}
          {errors.endDateTime && (
            <div className="error-message six-twelfths">{errors.endDateTime}</div>
          )}
          </div>

        </form>

        {/* <BottomButtons page="5" leftButton="Back" leftButtonDest="/ThirdForm" rightButton="Next" rightButtonDest="/FifthForm" /> */}
        <BottomButtons  page="5" leftButton="Back" leftButtonDest="/ThirdForm" rightButton="Next" rightOnClick={nextClick} />

      </div>
    </div>
  );
}

export default Formpage4;