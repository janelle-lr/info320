// import React from 'react';
// import './intialForm.css';
// import { Link } from "react-router-dom";


// // Components
// import "../components/Layout.css";
// import "../components/Texts.css";
// import NavigationBar from "../components/NavigationBar";
// import Button from '../components/Button';


// export const Formpage1 = () => {
//   const backButtonClick = () => {
//     // Add your desired functionality here, e.g., go back in history
//     window.history.back();
//   };
//   return (
//     <div className="form">
//       <div className="form-v">
//         < NavigationBar/>
//         <div className="form-title">Applicant Details</div>
        
//         <div className="firstName">
//           <label htmlFor="firstName">
//           </label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             className="half-width"
//             placeholder="First Name"
//             />
//         </div>
        
//         <div className="text-input">
//           <label htmlFor="lastName">
//           </label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             className="last-name"
//             placeholder="Last Name"
//           />
//         </div>

//         <div className="organization">
//           <label htmlFor="organization" >
//           </label>
//           <input
//             type="text"
//             id="organization"
//             name="organization"
//             className="full-width"
//             placeholder="Enter your organization"
//           />
//         </div>
//         <div className="address">
//           <label htmlFor="address">
//           </label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             className="full-width"
//             placeholder="Enter your address"
//           />
//         </div>
        
//         <div className="email">
//           <label htmlFor="email">
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="email-width"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="cell-number">
//           <label htmlFor="cellPhone">
//           </label>
//           <input
//             type="number"
//             id="cellPhone"
//             name="cellPhone"
//             className="cell-width"
//             placeholder="Enter your cell phone number"
//           />
//         </div>

//         {/* <div className="Next-button">
//           <div className="overlap-group">
//             <button type='button' className="Next"> Next</button>
//           </div>
//         </div>  */}

//         <div className="Button">
//           <Button variant="button-primary">
//               <Link to="/SecondForm">
//               Next
//              </Link>
//           </Button>
//         </div>




//         <div className="Cancel-button">
//           <div className="div-wrapper">
//             <div className="cancel-text" onClick={backButtonClick}>Back</div>
//           </div>
//         </div>
//         <div className="page-no" >2 of 7</div>
//       </div>
//     </div>
//   );
// };

// export default Formpage1;


import React, { useState, useEffect } from 'react';
import './intialForm.css';

// Components
import "../components/Layout.css";
import "../components/Texts.css";
import Button from '../components/Button';
import FormButton from '../components/FormButtons.js';
import NavigationBarForm from '../components/NavivagtionBarForms';

export const Formpage1 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    address: "",
    email: "",
    cellPhone: ""
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
    if (!formData.cellPhone) {
      newErrors.cellPhone = "Cell phone number is required";
    // } else if (!/^\d{20}$/.test(formData.cellPhone)) {
    //   newErrors.cellPhone = "Invalid cell phone number format";
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
    <div className="form">
      <div className="form-v">
        <NavigationBarForm />
        <div className="form-title">Applicant Details</div>

        <div className="firstName">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="half-width"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="text-input">
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="last-name"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
{/* All of the error messages are printing here - this is so that its easy to see in dev stage */}
{errors.firstName && <div className="error-message">{errors.firstName}</div>}
          {errors.lastName && <div className="error-message">{errors.lastName}</div>}
          {errors.organization && <div className="error-message">{errors.organization}</div>}
          {errors.address && <div className="error-message">{errors.address}</div>}
          {errors.email && <div className="error-message">{errors.email}</div>}
          {errors.cellPhone && <div className="error-message">{errors.cellPhone}</div>}
         

        </div>

        <div className="organization">
          <label htmlFor="organization"></label>
          <input
            type="text"
            id="organization"
            name="organization"
            className="full-width"
            placeholder="Enter your organization name"
            value={formData.organization}
            onChange={handleChange}
          />
        </div>

        <div className="address">
          <label htmlFor="address"></label>
          <input
            type="text"
            id="address"
            name="address"
            className="full-width"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="email">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            className="email-width"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="cell-number">
          <label htmlFor="cellPhone"></label>
          <input
            type="number"
            id="cellPhone"
            name="cellPhone"
            className="cell-width"
            placeholder="Enter your cell phone number"
            value={formData.cellPhone}
            onChange={handleChange}
          />
        </div>

        {/* this part below is the button in terms of the validation - i have tried to 
        enable it to the FormButton but my one doesnt work as of now, if you want to see the validation work uncomment below section! */}

        {/* <div className="Button">
          <Button variant="button-primary" onClick={nextClick} >
            Next
          </Button>
        </div> */}

        <FormButton  page="2" leftButton="Back" leftButtonDest="/RequestForm" rightButton="Next" rightOnClick={nextClick} />


{/* this button is for saving data intially before merging it  */}

        {/* <FormButton  onClick={nextClick}  page="2" leftButton="Back" leftButtonDest="/SecondForm" rightButton="Next" rightButtonDest="/FourthForm" /> */}
      </div>
    </div>
  );
};

export default Formpage1;
