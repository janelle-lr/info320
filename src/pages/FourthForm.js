// import React from 'react';
// import './intialForm.css';
// import { Link } from "react-router-dom";


// // Components
// import "../components/Layout.css";
// import "../components/Texts.css";
// import NavigationBar from "../components/NavigationBar";
// import Button from '../components/Button';


// export const Formpage4 = () => {
//   const backButtonClick = () => {
//     // Add your desired functionality here, e.g., go back in history
//     window.history.back();
//   };
//   return (
//     <div className="form">
//       <div className="form-v">
//         < NavigationBar/>
//         <div className="form-title"> MARK YOURS </div>
        
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
//               <Link to="/FifthForm">
//               Next
//              </Link>
//           </Button>
//         </div>




//         <div className="Cancel-button">
//           <div className="div-wrapper">
//             <div className="cancel-text" onClick={backButtonClick}>Back</div>
//           </div>
//         </div>
//         <div className="page-no" >5 of 7</div>
//       </div>
//     </div>
//   );
// };

// export default Formpage4;

import React, { useState } from 'react';
import './intialForm.css';
import { Link } from "react-router-dom";


// Components
import "../components/Layout.css";
import "../components/Texts.css";
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
    <div>
      {submittedData ? (
        <div>
          <h2>Form Submitted Successfully!</h2>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lname}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>

        </div>
      ) : (

        
        <form onSubmit={handleSubmit}>
          <NavigationBarForms/>
          <div className="firstName">            
          <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="half-width"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          {/* <div className="firstName">
          <label htmlFor="firstName">
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="half-width"
            placeholder="First Name"
            />
        </div>  */}

          <div>
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
            />
            {errors.lname && <p className="error">{errors.lname}</p>}
          </div>




          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default MyForm;