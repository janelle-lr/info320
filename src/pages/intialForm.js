import React, { useState, useEffect } from "react";

// Components
import BottomButtons from "../components/FormButtons";
import Button from "../components/Button";
import logo from "../images/contactLogo.png";
import NavigationBarForm from "../components/NavivagtionBarForms";

export const Formpage1 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    address: "",
    email: "",
    cellPhone: "",
  });

  const [errors, setErrors] = useState({});

  // setting out the error validation prompts for each of the feilds where an input is required to be filled in

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.organization) {
      newErrors.organization = "Organization is required";
    }
    if (!formData.address) {
      newErrors.address = "Address is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    // if (!formData.cellPhone) {
    //   newErrors.cellPhone = "Cell phone number is required";
    // } else if (!/^\d{20}$/.test(formData.cellPhone)) {
    //   newErrors.cellPhone = "Invalid cell phone number format";
    // }
    if (!formData.cellPhone) {
      newErrors.cellPhone = "Moblie number is required";
    } else if (!/^\d{6,15}$/.test(formData.cellPhone)) {
      newErrors.cellPhone = "Mobile number is invalid";
    }

    return newErrors;
  };

  // const nextClick = () => {
  //   const newErrors = validateForm();
  //   if (Object.keys(newErrors).length === 0) {
  //     // Validation passed, navigate to the next form page
  //     // You can also submit the form data to your server here
  //     // For now, let's print the data to the console
  //     console.log(formData);
  //   } else {
  //     // Validation failed, set the errors state to display error messages
  //     setErrors(newErrors);
  //   }
  // };

  // nextClick triggers the repsonse from the next button at the button

  const nextClick = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Validation passed, navigate to the next form page
      // You can also submit the form data to your server here
      // For now, let's print the data to the console
      console.log(formData);

      // Reset the errors state to clear error messages
      setErrors({});
      saveFormData();
      window.location.href = "/SecondForm";
    } else {
      // Validation failed, set the errors state to display error messages
      setErrors(newErrors);
    }
  };

  // Load saved form data from localStorage when the component mounts
  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("formData")) || {};
    setFormData(savedFormData);
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveFormData = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  return (
    <div className="request-form section-container">
      <div className="first-form main-content">
        <NavigationBarForm />
        {/* <img src={logo} className="form-contact-logo" /> */}
        <h1 className="form-heading">Applicant Details</h1>
        {/* <h1 className="form-heading">{message}</h1> */}
        <form className="container label-invisible">
          <div className="row">
            <label htmlFor="firstName">First Name</label>
            <input
              id="posting"
              className="text-box five-twelfths"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              className="text-box seven-twelfths"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {/* All of the error messages are printing here - this is so that its easy to see in dev stage */}

            {/* 
            
            
             */}
          </div>
          {/* <div className="row"> */}
          <div className="error-message-group">
            {/* {errors.firstName && ( */}
            <div className="error-message five-twelfths">
              {errors.firstName}
            </div>
            {/* )} */}
            {/* </div> */}
            {/* {errors.lastName && ( */}
            <div className="error-message seven-twelfths">
              {errors.lastName}
            </div>
            {/* )} */}
          </div>

          <label htmlFor="organization">Organization</label>
          <input
            className="text-box full-width"
            type="text"
            name="organization"
            placeholder="Organization"
            value={formData.organization}
            onChange={handleChange}
          />
          {/* {errors.organization && ( */}
          {/* <div className="error-message">{errors.organization}</div> */}
          {/* )} */}
          {/* <div className="error-message-group"> */}
          <div className="error-message">{errors.organization}</div>
          {/* </div> */}

          <label htmlFor="address">Address</label>
          <input
            className="text-box full-width"
            type="text"
            name="address"
            placeholder="Full Address"
            value={formData.address}
            onChange={handleChange}
          />
          {/* {errors.address && ( */}
          <div className="error-message">{errors.address}</div>
          {/* )} */}

          <div className="row">
            <label htmlFor="email">Email</label>
            <input
              className="text-box seven-twelfths"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="cellPhone">Mobile Number</label>
            <input
              className="text-box five-twelfths"
              type="tel"
              name="cellPhone"
              placeholder="Mobile Number"
              value={formData.cellPhone}
              onChange={handleChange}
            />
          </div>

          <div className="error-message-group">
            {/* {errors.email && ( */}
            <div className="error-message seven-twelfths">{errors.email}</div>
            {/* )} */}
            {/* {errors.cellPhone && ( */}
            <div className="error-message five-twelfths">
              {errors.cellPhone}
            </div>
            {/* )} */}
          </div>
          {/* this part below is the button in terms of the validation - i have tried to 
        enable it to the FormButton but my one doesnt work as of now, if you want to see the validation work uncomment below section! */}

          {/* <div className="Button">
          <Button variant="button-primary" onClick={nextClick} >
            Next
          </Button>
        </div> */}
        </form>

        {/* <BottomButtons
          page="2"
          leftButton="Back"
          leftButtonDest="/RequestForm"
          rightButton="Next"
          rightButtonDest="/SecondForm"
        /> */}
        <BottomButtons
          page="2"
          leftButton="Back"
          leftButtonDest="/RequestForm"
          rightButton="Next"
          rightOnClick={nextClick}
        />
        {/* this button is for saving data intially before merging it  */}

        {/* <FormButton  onClick={nextClick}  page="2" leftButton="Back" leftButtonDest="/SecondForm" rightButton="Next" rightButtonDest="/FourthForm" /> */}
      </div>
    </div>
  );
};

export default Formpage1;
