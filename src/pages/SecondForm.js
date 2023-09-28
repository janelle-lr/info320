import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


// Components
import BottomButtons from "../components/FormButtons";
import logo from "../images/contactLogo.png";
import Button from "../components/Button";
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


  function postData() {
    const firstName = document.getElementsByName("firstName")[0].value;
    const lastName = document.getElementsByName("lastName")[0].value;
    const organization = document.getElementsByName("organization")[0].value;
    const address = document.getElementsByName("address")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const phoneNumber = document.getElementsByName("phoneNumber")[0].value;
    const qualifications = document.getElementsByName("qualifications")[0].value;
  
    const formData = {
      firstName,
      lastName,
      organization,
      address,
      email,
      phoneNumber,
      qualifications,
    };
    alert(JSON.stringify(formData));
  
    fetch("http://localhost:5500/SecondForm/postData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          alert("Success");
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while connecting.");
      });
  }
  return (
    <div className="request-form section-container">
      <div className="first-form main-content">
        <NavigationBarForm />
        {/* <img src={logo} className="form-contact-logo" /> */}
        <h1 className="form-heading">Trip Leader</h1>
        <form className="container label-invisible">
          <div className="row">
            <label htmlFor="firstName">First Name</label>
            <input
              className="text-box five-twelfths"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData2.firstName}
              onChange={handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              className="text-box seven-twelfths"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData2.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="errorMessage">
            {/* All of the error messages are printing here - this is so that its easy to see in dev stage */}
            {errors.firstName && (
              <div className="error-message">{errors.firstName}</div>
            )}
            {errors.lastName && (
              <div className="error-message">{errors.lastName}</div>
            )}
            {errors.organization && (
              <div className="error-message">{errors.organization}</div>
            )}
            {errors.address && (
              <div className="error-message">{errors.address}</div>
            )}
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
            {errors.cellPhone && (
              <div className="error-message">{errors.cellPhone}</div>
            )}
          </div>

          <label htmlFor="organization">Organization</label>
          <input
            className="text-box full-width"
            type="text"
            name="organization"
            placeholder="Organization" value={formData2.organization}
            onChange={handleChange}
          />

          <label htmlFor="address">Address</label>
          <input
            className="text-box full-width"
            type="text"
            name="address"
            placeholder="Full Address" value={formData2.address}
            onChange={handleChange}
          />

          <div className="row">
            <label htmlFor="email">Email</label>
            <input
              className="text-box seven-twelfths"
              type="email"
              name="email"
              placeholder="Email" value={formData2.email}
              onChange={handleChange}
            />

            <label htmlFor="phoneNumber">Mobile Number</label>
            <input
              className="text-box five-twelfths"
              type="tel"
              name="phoneNumber"
              placeholder="Mobile Number" value={formData2.cellPhone}
              onChange={handleChange}
            />
          </div>

          <label htmlFor="qualifications">Qualifications</label>
          <input
            className="text-box full-width"
            type="text"
            name="qualifications"
            placeholder="Qualifications"
          />
        </form>
        <Button variant="button-primary" onClick={postData}>
          Post
        </Button>
        {/* <BottomButtons
          page="3"
          leftButton="Back"
          leftButtonDest="/intialForm"
          rightButton="Next"
          rightButtonDest="/ThirdForm"
        /> */}
        <BottomButtons  page="3" leftButton="Back" leftButtonDest="/intialForm" rightButton="Next" rightOnClick={nextClick} />
      </div>
    </div>
  );
};

export default Formpage2;
