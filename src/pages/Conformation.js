import React, { useState, useEffect } from "react";

// Components
import Button from "../components/Button";
import NavigationBarForm from "../components/NavivagtionBarForms";
import check from "../images/check-o.svg";

export const Formpage6 = () => {
  const [requestId, setRequestId] = useState("");

  useEffect(() => {
    fetch("http://localhost:5500/getReqId")
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => {
        setRequestId(data.requestId); // Set the requestId from the response
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while fetching the request ID.");
      });
  }, []);

  
  const clearLocalstorage = () => {
      localStorage.clear();
  };

  return (
    <div className="request-form section-container">
      <div className="main-content">
        <NavigationBarForm />
        <div className="dialogue-info">
          <h1>Request Sent</h1>
          <p id="request-id">Request ID: {requestId}</p>

          <img id="checkIcon" src={check} alt="" />
          <p>
            Thank you for your request, our team will review your request
            shortly.
            <br />
            You can view approved flow requests on the wave information page.
            <br />
            For urgent issues please contact us on 03 440 0329.
            <br />
          </p>
          <Button variant="button-primary dialogue-button" destination="/" onClick={clearLocalstorage}>
            Dismiss
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Formpage6;
