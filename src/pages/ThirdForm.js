import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import BottomButtons from "../components/FormButtons";
import logo from "../images/contactLogo.png";
import NavigationBar from "../components/NavigationBar";
import NavigationBarForm from "../components/NavivagtionBarForms";
import FormButton from "../components/FormButtons.js";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown.js";
import RequiredStar from "../components/RequiredStar";

export const Formpage3 = () => {
  const [formData3, setFormData3, selectedValue] = useState({
    flowLevel: "",
    Breif: "",
    participants: "",
    NoParticpants: "",
    startDateTime: "",
    endDateTime: ""
  });

  const [errors, setErrors] = useState({});

  // setting out the error validation prompts for each of the feilds where an input is required to be filled in

  const validateForm = () => {
    const newErrors = {};
    if (!formData3.calander) {
      newErrors.calander = "Date is required";
    }
    if (!formData3.Breif) {
      newErrors.Breif = "Breif is required";
    }

    if (!formData3.participants) {
      newErrors.participants = "A short description of particpants is needed";
    }
    if (!formData3.NoParticpants) {
      newErrors.NoParticpants = "Number of participants is required";
    }
    if (!formData3.flowLevel) {
      newErrors.flowLevel = "Flow Level is required";
    }
    if (!formData3.startDateTime) {
      newErrors.startDateTime = "Start date time is required";
    }
    if (!formData3.endDateTime) {
      newErrors.endDateTime = "End date time is required";
    }
    // if (!formData3.selectedValue) {
    //   newErrors.selectedValue = "Area for activity is required";
    // }
    return newErrors;
  };

  const nextClick = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Validation passed, navigate to the next form page
      // You can also submit the form data to your server here
      // For now, let's print the data to the console
      // console.log(formData3);
      console.log("Next button clicked"); // Add this line for debugging

  
      // Reset the errors state to clear error messages
      setErrors({});
      saveFormData3();
      window.location.href = "/FourthForm";
    } else {
      // Validation failed, set the errors state to display error messages
      setErrors(newErrors);
    }
  };

  

  // Load saved form data from localStorage when the component mounts
  useEffect(() => {
    const savedFormData3 = JSON.parse(localStorage.getItem("formData3")) || {};
    setFormData3(savedFormData3);
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData3({ ...formData3, [name]: value });
  };

  const saveFormData3 = () => {
    try {
      localStorage.setItem("formData3", JSON.stringify(formData3));
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
    }
  };
  return (
    <div className="request-form">
    <NavigationBarForm />
      <div className="third-form main-content">
        {/* <img src={logo} className="form-contact-logo" /> */}
        <h1 className="form-heading">Flow and Activity Details</h1>
        <h2 className="form-title-secondary">First Preference Flow Details</h2>

        <form className="container">
          <div className="label-invisible">
            <label htmlFor="flowLevel">
              Required flow/level range (e.g. 30 - 40 m&sup3;/s)
            </label>
            <RequiredStar isRequired={true} />
            <input
              type="text"
              name="flowLevel"
              className="text-box full-width"
              placeholder="Required flow/level range (e.g. 30 - 40 m&sup3;/s)"
              value={formData3.flowLevel}
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
            value={formData3.startDateTime}
            onChange={handleChange}
            />

            <label htmlFor="endDateTime">End date & time</label>
            <input type="datetime-local" name="endDateTime" className="text-box six-twelfths" placeholder="End date & time (DD/MM/YYYY 00:00)" 
            value={formData3.endDateTime}
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

        <br />
        <form className="container">
          <div className="label-invisible">
            <h2 className="form-title-secondary">Activity Details</h2>
            <label htmlFor="activityDetails">Brief activity description</label>
            <textarea
              type="text"
              name="Breif"
              className="text-box full-width"
              placeholder="Brief activity description"
              value={formData3.Breif}
              onChange={handleChange}
            />
            {errors.Breif && (
              <div className="error-message">{errors.Breif}</div>
            )}

            <div className="row">
              <label htmlFor="participants">
                Brief participant(s) description
              </label>
              <input
                className="text-box eight-twelfths"
                type="text"
                name="participants"
                placeholder="Brief participant(s) description"
                value={formData3.participants}
                onChange={handleChange}
              />
              
              <label htmlFor="NoParticpants">Number of participants</label>
              <input
                className="text-box four-twelfths"
                type="number"
                name="NoParticpants"
                placeholder="Number of participants"
                value={formData3.NoParticpants}
                onChange={handleChange}
              />
            </div>
            
          </div>
          <div className="row">
          {errors.participants && (
            <div className="error-message eight-twelfths">{errors.participants}</div>
          )}
          {errors.NoParticpants && (
            <div className="error-message four-twelfths">{errors.NoParticpants}</div>
          )}
          </div>
        </form>

        {/* <div className="Next-button">
          <div className="overlap-group">
            <button type='button' className="Next"> Next</button>
          </div>
        </div>  */}
        {/* 
        <BottomButtons
          page="4"
          leftButton="Back"
          leftButtonDest="/SecondForm"
          rightButton="Next"
          rightButtonDest="/FourthForm"
        /> */}

        {/* <BottomButtons
          page="4"
          leftButton="Back"
          leftButtonDest="/SecondForm"
          rightButton="Next"
          rightOnClick={nextClick}
        /> */}

        <BottomButtons  page="4" leftButton="Back" leftButtonDest="/ThirdForm" rightButton="Next" rightOnClick={nextClick} />

      </div>
    </div>
  );
};

export default Formpage3;
