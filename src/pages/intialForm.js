import React , { useState, useEffect } from "react";

// Components
import BottomButtons from "../components/FormButtons";
import Button from "../components/Button";
import logo from "../images/contactLogo.png";

export const Formpage1 = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/initialForm")
      .then((res) => res.json());
      // .then((data) => setMessage(data.message));
  }, []);

  function postData() {
    const firstName = document.getElementsByName("firstName")[0].value;
    const lastName = document.getElementsByName("lastName")[0].value;
    const organization = document.getElementsByName("organization")[0].value;
    const address = document.getElementsByName("address")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const phoneNumber = document.getElementsByName("phoneNumber")[0].value;
  
    const formData = {
      firstName,
      lastName,
      organization,
      address,
      email,
      phoneNumber,
    };
    alert(JSON.stringify(formData));
  
    fetch("http://localhost:5000/initialForm/postData", {
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
        <h1 className="form-heading">Applicant Details</h1>
        {/* <h1 className="form-heading">{message}</h1> */}
        <form className="container label-invisible">
          <div className="row">
            <label htmlFor="firstName">First Name</label>
            <input id="posting" className="text-box five-twelfths" type="text" name="firstName" placeholder="First Name" />

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
        </form>
        <Button variant="button-primary" onClick={postData} >Post</Button>
        <BottomButtons page="2" leftButton="Back" leftButtonDest="/RequestForm" rightButton="Next" rightButtonDest="/SecondForm" />
      </div>
    </div>
  );
};

export default Formpage1;
