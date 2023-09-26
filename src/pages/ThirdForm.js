import React, { useState, useEffect } from 'react';
import './intialForm.css';
import { Link } from "react-router-dom";
import Dropdown from '../components/Dropdown.js';
import Calander from '../components/Calander.js';




// Components
import "../components/Layout.css";
import "../components/Texts.css";
import NavigationBar from "../components/NavigationBar";
import NavigationBarForm from '../components/NavivagtionBarForms';
import FormButton from '../components/FormButtons.js';
import Button from '../components/Button.js';
import RequiredStar from '../components/RequiredStar';


export const Formpage3 = () => {
  const [formData3, setFormData3, selectedValue] = useState({
    calander: "",
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
      if (!formData3.FlowRange) {
        newErrors.FlowRange = "Flow Range is required";
      }
      if (!formData3.particpants) {
        newErrors.FlowRange = "A short description of particpants is needed";
      }
      if (!formData3.NoParticpants) {
        newErrors.NoParticpants = "Number of participants is required";
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
        console.log(formData3);
    
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
    <div className="form">
      <div className="form-v">
        < NavigationBarForm/>
        <div className="form-title1"> Form and Activity Details</div>
        <div className="FristPreference">First Preference Flow Details</div>

        <div className="FlowRange">
          <label htmlFor="FlowRange" >
          </label>
          <RequiredStar isRequired={true}/> 
          <input
            type="text"
            id="FlowRange"
            name="FlowRange"
            className="full-width"
            placeholder="Required Flow Range (e.g. 30 - 40 m&sup3;/s)"            
            required
            value={formData3.FlowRange}
            onChange={handleChange}
          />
        </div>

        {/* All of the error messages are printing here - this is so that its easy to see in dev stage */}
        <div className="errorMessagePrompt">
        {errors.FlowRange && <div className="error-message">{errors.FlowRange}</div>}
        {errors.calander && <div className="error-message">{errors.calander}</div>}
        {errors.Breif && <div className="error-message">{errors.Breif}</div>}
        {errors.NoParticpants && <div className="error-message">{errors.NoParticpants}</div>}
        {errors.particpants && <div className="error-message">{errors.particpants}</div>}


        </div>


        <div className="AreaReq">
          <label htmlFor="AreaReq">
          </label>
        {/* <select id="dropdown" value={selectedValue} onChange={handleChange}>
        <option value="">Area of Request</option>
        <option value="Hawea River (The wave)"> Hawea River (The wave)</option>
        <option value="Alberttown camp ground"> Alberttown Camp Ground</option>
      </select> */}
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
            value={formData3.calander}
            onChange={handleChange}
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
            value={formData3.Breif}
            onChange={handleChange}
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
            value={formData3.particpants}
            onChange={handleChange}
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
            value={formData3.NoParticpants}
            onChange={handleChange}
          />
        </div>

        {/* <div className="Next-button">
          <div className="overlap-group">
            <button type='button' className="Next"> Next</button>
          </div>
        </div>  */}
<FormButton  page="3" leftButton="Back" leftButtonDest="/SecondForm" rightButton="Next" rightOnClick={nextClick} />

      </div>
    </div>
  );
};

export default Formpage3;