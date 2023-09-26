import React, { useState, useEffect } from 'react';
import './intialForm.css';
import { Link } from "react-router-dom";


// Components
import "../components/Layout.css";
import "../components/Texts.css";
import NavigationBar from "../components/NavigationBar";
import FormButton from '../components/FormButtons.js';
import NavigationBarForm from '../components/NavivagtionBarForms';



export const Formpage2 = () => {
  const [formData2, setFormData2] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    address: "",
    email: "",
    cellPhone: "",
    Qualifications: ""
  });



  const [errors, setErrors] = useState({});

// setting out the error validation prompts for each of the feilds where an input is required to be filled in 

  const validateForm = () => {
    const newErrors = {};
    if (!formData2.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData2.lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData2.organization) {
      newErrors.organization = "Organization is required";
    }
    if (!formData2.address) {
      newErrors.address = "Address is required";
    }
    if (!formData2.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData2.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData2.cellPhone) {
      newErrors.cellPhone = "Moblie number is required";
    } else if (!/^\d{6,15}$/.test(formData2.cellPhone)) {
      newErrors.cellPhone = "Mobile number is invalid";
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
    console.log(formData2);

    // Reset the errors state to clear error messages
    setErrors({});
    saveFormData2();
    window.location.href = "/ThirdForm";
  } else {
    // Validation failed, set the errors state to display error messages
    setErrors(newErrors);
  }
};

  // Load saved form data from localStorage when the component mounts
  useEffect(() => {
    const savedFormData2 = JSON.parse(localStorage.getItem("formData2")) || {};
    setFormData2(savedFormData2);
  }, []); // The empty dependency array ensures this effect runs once when the component mounts



const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData2({ ...formData2, [name]: value });
};

// const saveFormData2 = () => {
//   localStorage.setItem("formData2", JSON.stringify(formData2));
// };

const saveFormData2 = () => {
  try {
    localStorage.setItem("formData2", JSON.stringify(formData2));
  } catch (error) {
    console.error("Error saving data to localStorage:", error);
  }
};







  return (
    <div className="form">
      <div className="form-v">
      <NavigationBarForm />
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
            value={formData2.firstName}
            onChange={handleChange}
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
            value={formData2.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="errorMessage">
        {/* All of the error messages are printing here - this is so that its easy to see in dev stage */}
        {errors.firstName && <div className="error-message">{errors.firstName}</div>}
          {errors.lastName && <div className="error-message">{errors.lastName}</div>}
          {errors.organization && <div className="error-message">{errors.organization}</div>}
          {errors.address && <div className="error-message">{errors.address}</div>}
          {errors.email && <div className="error-message">{errors.email}</div>}
          {errors.cellPhone && <div className="error-message">{errors.cellPhone}</div>}
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
            value={formData2.organization}
            onChange={handleChange}
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
            value={formData2.address}
            onChange={handleChange}
            
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
            value={formData2.email}
            onChange={handleChange}
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
            placeholder="Mobile number"
            value={formData2.cellPhone}
            onChange={handleChange}
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

{/* <FormButton  page="2" leftButton="Back" leftButtonDest="/intialForm" rightButton="Next" rightButtonDest="/ThirdForm" /> */}

<FormButton  page="3" leftButton="Back" leftButtonDest="/intialForm" rightButton="Next" rightOnClick={nextClick} />


        

      
      </div>
    </div>
  );
};

export default Formpage2;