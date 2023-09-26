import React, { useState } from 'react';

// Components
import "../components/Layout.css";
import "../components/Texts.css";
// Components
import logo from "../images/contactLogo.png";
import BottomButtons from "../components/FormButtons";
import NavigationBarForms from "../components/NavivagtionBarForms.js";
import Button from '../components/Button';

function MyForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lname: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, save the data
      setSubmittedData(formData);
    } else {
      // Form is invalid, display errors
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    // Implement your form validation logic here
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = 'first name is required';
    }
    if (!formData.lname.trim()) {
      errors.lname = 'Last Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Implement email validation logic (e.g., regex)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
<<<<<<< HEAD
    <div className="form-4">
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
=======
    <div className="request-form section-container">
      <div className="first-form main-content">
        <img src={logo} className="form-contact-logo" />
        <h1 className="form-heading">Flow and Activity Details</h1>
        <h2 className="form-title-secondary">Secondary Preference Flow Details</h2>
        <p className="form-paragraph">In case your preferred flow request gets declined, please provide other suitable times and areas the activity can be undertake.</p>
>>>>>>> 7774d4cc8b2850331d6c202543f5ab58b40926d4

        <form className="container">
          <div className="label-invisible">
            <label htmlFor="flowLevel">Required flow/level range (e.g. 30 - 40 m&sup3;/s)</label>
            <input type="text" name="flowLevel" className="text-box full-width" placeholder="Required flow/level range (e.g. 30 - 40 m&sup3;/s)" />

            <label htmlFor="requestArea">Area of Request</label>
            <input type="text" name="requestArea" className="text-box full-width" placeholder="Area of Request" />
          </div>

          <div className="row">
            <label htmlFor="startDateTime">Start date & time</label>
            <input type="datetime-local" name="startDateTime" className="text-box six-twelfths" placeholder="Start date & time (DD/MM/YYYY 00:00)" />

            <label htmlFor="endDateTime">End date & time</label>
            <input type="datetime-local" name="endDateTime" className="text-box six-twelfths" placeholder="End date & time (DD/MM/YYYY 00:00)" />
          </div>
        </form>

        <BottomButtons page="5" leftButton="Back" leftButtonDest="/ThirdForm" rightButton="Next" rightButtonDest="/FifthForm" />
      </div>
    </div>
  );
}

export default MyForm;