import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import BottomButtons from "../components/FormButtons";
import logo from "../images/contactLogo.png";
import Button from "../components/Button";
import NavigationBarForm from "../components/NavivagtionBarForms";

export const Formpage2 = () => {
  const [formData2, setFormData2] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    address: "",
    email: "",
    cellPhone: "",
    Qualifications: "",
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
    const localStorageItems = {};

    // populating localStorageItems
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      alert(`Key: ${key}, Value: ${value}`);
      localStorageItems[key] = JSON.parse(value); // parses values to JSON
    }

    fetch("http://localhost:5500/postData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(localStorageItems),
    })
      .then((res) => {
        if (res.ok) {
          return res.text();
        } else {
          alert("Error");
        }
      })
      .then((message) => {
        console.error(message);
        alert(message);
        sendEmail();
        //localStorage.clear();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while saving form data.");
      });
  }

  // Load saved form data from localStorage when the component mounts
  useEffect(() => {
    const savedFormData2 = JSON.parse(localStorage.getItem("formData2")) || {};
    setFormData2(savedFormData2);
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  function sendEmail() {
    // get first form data
    const applicantDetails = localStorage.getItem("formData");
    const formData = JSON.parse(applicantDetails);

    // Access the firstName property from the formData object
    const applicantName = {
      firstName: formData.firstName,
      lastName: formData.lastName,
    };
    // const firstName = formData.firstName;
    // const lastName = formData.lastName;

    //alert(firstName);

    fetch("http://localhost:5500/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicantName),
    })
      .then((res) => {
        if (res.ok) {
          return res.text();
        } else {
          alert("Error");
        }
      })
      .then((message) => {
        console.error(message);
        alert(message);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while saving form data.");
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
          <div className="error-message-group">
            <div className="error-message five-twelfths">
              {errors.firstName}
            </div>
            <div className="error-message seven-twelfths">
              {errors.lastName}
            </div>
          </div>

          <label htmlFor="organization">Organization</label>
          <input
            className="text-box full-width"
            type="text"
            name="organization"
            placeholder="Organization"
            value={formData2.organization}
            onChange={handleChange}
          />
          <div className="error-message">{errors.organization}</div>

          <label htmlFor="address">Address</label>
          <input
            className="text-box full-width"
            type="text"
            name="address"
            placeholder="Full Address"
            value={formData2.address}
            onChange={handleChange}
          />
          <div className="error-message">{errors.address}</div>

          <div className="row">
            <label htmlFor="email">Email</label>
            <input
              className="text-box seven-twelfths"
              type="email"
              name="email"
              placeholder="Email"
              value={formData2.email}
              onChange={handleChange}
            />

            <label htmlFor="cellPhone">Mobile Number</label>
            <input
              className="text-box five-twelfths"
              type="tel"
              name="cellPhone"
              placeholder="Mobile Number"
              value={formData2.cellPhone}
              onChange={handleChange}
            />
          </div>
          <div className="error-message-group">
            <div className="error-message seven-twelfths">{errors.email}</div>
            <div className="error-message five-twelfths">
              {errors.cellPhone}
            </div>
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
        <BottomButtons
          page="3"
          leftButton="Back"
          leftButtonDest="/intialForm"
          rightButton="Next"
          rightOnClick={nextClick}
        />
      </div>
    </div>
  );
};

export default Formpage2;
