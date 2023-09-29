import React, { useState } from "react";

// Components
import logo from "../images/contactLogo.png";
import BottomButtons from "../components/FormButtons";
import NavigationBarForm from "../components/NavivagtionBarForms";

export const Formpage5 = () => {
  const [formData5, setFormData5, ] = useState({
    termsConditons: false, // Initialize with an initial value
  });

  const [errors, setErrors] = useState({});

  // setting out the error validation prompts for each of the feilds where an input is required to be filled in 
  
    const validateForm = () => {
      const newErrors = {};
      if (!formData5.termsConditons) {
        newErrors.termsConditons = " is required";
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
  

  



  return (
    <div className="request-form section-container">
      <div className="fifth-form main-content">
        <NavigationBarForm />
        {/* <img src={logo} className="form-contact-logo" /> */}
        <h1 className="form-heading">Health and Safety</h1>
        <form className="label-visible">
          <br></br>

        <p className="form-paragraph">
          The H&S that contact lads get us will slot in here as the T&C's 
          
        </p>
        <div className="checkbox">
          <input className="checkbox" type="checkbox" name="termsConditons" value={formData5.termsConditons}
              onChange={handleChange}/> 
          <label> Yes i have read the health and saftey</label>
          </div>

          {errors.termsConditons && (
              <div className="error-message">{errors.termsConditons}</div>
            )}






        </form>

        <BottomButtons
          page="6"
          leftButton="Back"
          leftButtonDest="/FourthForm"
          rightButton="Submit"
          rightButtonDest="/Conformation"
        />
      </div>
    </div>
  );
};

export default Formpage5;
