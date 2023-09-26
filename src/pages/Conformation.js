import React from "react";

// Components
import Button from "../components/Button";
import logo from "../images/contactLogo.png";

export const Formpage6 = () => {
  return (
    <div className="request-form section-container">
      <div className="main-content">
        <img src={logo} className="form-contact-logo" />
        <div className="dialogue-info">
          <h1>Request Sent</h1>
          <p id="request-id">Request ID: 1111111</p>

          <img src="https://via.placeholder.com/280x280" alt="" />
          <p>
            Thank your for you request, our team will review your request
            shortly.
            <br />
            You can view approved flow requests on the wave information page.
            <br />
            For urgent issues please contact us on 03 440 0329.
            <br />
          </p>
          <Button variant="button-primary dialogue-button" destination="/">Dismiss</Button>
        </div>
      </div>
    </div>
  );
};

export default Formpage6;
