import React from "react";

// Components
import BottomButtons from "../components/FormButtons";
import logo from "../images/contactLogo.png";
import Button from "../components/Button";

export const Formpage2 = () => {
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
  
    fetch("http://localhost:5000/SecondForm/postData", {
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
        <img src={logo} className="form-contact-logo" />
        <h1 className="form-heading">Trip Leader</h1>
        <form className="container label-invisible">
          <div className="row">
            <label htmlFor="firstName">First Name</label>
            <input className="text-box five-twelfths" type="text" name="firstName" placeholder="First Name" />
            <label htmlFor="lastName">Last Name</label>
            <input className="text-box seven-twelfths" type="text" name="lastName" placeholder="Last Name" />
          </div>
          
          <label htmlFor="organization">Organization</label>
          <input className="text-box full-width" type="text" name="organization" placeholder="Organization" />
          
          <label htmlFor="address">Address</label>
          <input className="text-box full-width" type="text" name="address" placeholder="Full Address" />

          <div className="row">
            <label htmlFor="email">Email</label>
            <input className="text-box seven-twelfths" type="email" name="email" placeholder="Email" />
            
            <label htmlFor="phoneNumber">Mobile Number</label>
            <input className="text-box five-twelfths" type="tel" name="phoneNumber" placeholder="Mobile Number" />
          </div>

          <label htmlFor="qualifications">Qualifications</label>
          <input className="text-box full-width" type="text" name="qualifications" placeholder="Qualifications" />
        </form>
        <Button variant="button-primary" onClick={postData} >Post</Button>
        <BottomButtons page="3" leftButton="Back" leftButtonDest="/intialForm" rightButton="Next" rightButtonDest="/ThirdForm" />
      </div>
    </div>
  );
};

export default Formpage2;
