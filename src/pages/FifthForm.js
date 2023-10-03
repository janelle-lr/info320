import React, { useState } from "react";

// Components
import logo from "../images/contactLogo.png";
import BottomButtons from "../components/FormButtons";
import NavigationBarForm from "../components/NavivagtionBarForms";
import Button from "../components/Button";

export const Formpage5 = () => {
  const [formData5, setFormData5,] = useState({
    termsConditons: false, // Initialize with an initial value
  });

  const [errors, setErrors] = useState({});

  // setting out the error validation prompts for each of the feilds where an input is required to be filled in 
  
    const validateForm = () => {
      const newErrors = {};
      if (!formData5.termsConditons) {
        newErrors.termsConditons = "Please accept terms & conditions";
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
      console.log(formData5);

      // Reset the errors state to clear error messages
      setErrors({});
      postData();
      sendEmail();
      // localStorage.clear();
      window.location.href = "/Conformation";
    } else {
      // Validation failed, set the errors state to display error messages
      setErrors(newErrors);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData5({ ...formData5, [name]: value });
  };

  function postData() {
    const localStorageItems = {};

    // populating localStorageItems
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      localStorageItems[key] = JSON.parse(value); // parses values to JSON
    }

    fetch("http://localhost:5500/postData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(localStorageItems),
    })
      .then((res) => {
        if (res.ok) {
          res.text().then((text) => console.log(text));
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while saving form data.");
      });
  }

  function sendEmail() {
    // get first form data from localStorage
    const applicantDetails = localStorage.getItem("formData");
    const formData = JSON.parse(applicantDetails);

    // Access the firstName property from the formData object
    const applicantName = {
      firstName: formData.firstName,
      lastName: formData.lastName,
    };
    // const firstName = formData.firstName;
    // const lastName = formData.lastName;

    fetch("http://localhost:5500/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicantName),
    })
      .then((res) => {
        if (res.ok) {
          alert(res.text());
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while saving form data.");
      });
  }

  return (
    <div className="request-form section-container">
      <div className="fifth-form main-content">
        <NavigationBarForm />
        {/* <img src={logo} className="form-contact-logo" /> */}
        <h1 className="form-heading">Health and Safety</h1>
        <form className="label-visible">
          <br></br>
          <p className="form-paragraph">
          By submitting a flow request, you acknowledge that Hawea river use is at your own risk, and Contact assumes no responsibility or liability for any injuries, accidents, or damages that may occur during your activities on the river. Please exercise caution, adhere to your prepared Health and Safety plan, and ensure your own well-being while enjoying the river.
          </p>
          <div className="checkbox">
            <input className="checkbox" type="checkbox" name="termsConditons" value={formData5.termsConditons}
              onChange={handleChange} />
            <label> I acknowledge the above, have considered the hazards on the river and have prepared a Health and Safety plan</label>
          </div>

          <div className="error-message">{errors.termsConditons}</div>
        </form>

        <BottomButtons
          page="6"
          leftButton="Back"
          leftButtonDest="/FourthForm"
          rightButton="Submit"
          rightOnClick={nextClick}
        />

      </div>
    </div>
  );
};

export default Formpage5;
