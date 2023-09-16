import React from "react";
import "./Form.css";

// Components
import logo from "../images/contactLogo.png";
import BottomButtons from "../components/FormButtons";

export const Form = () => {
  return (
    <div className="request-form">
      <div className="first-form main-content">
        <img src={logo} className="form-contact-logo" />
        <h1 className="form-heading">Notice</h1>

        <p className="form-paragraph">
          <br />
          Contact Energy will consider any and all Flow and/or Level Requests
          from the community. This form and its information is used to determine
          if the request can be granted. <br />
          <br />
          Contact will make &#34;reasonable endeavors&#34; to provide the
          requested flow or level, however all approvals are subject to
          generation requirements including, but not limited to, unexpected
          changes in electricity demand, generation plant availability or
          significant flow changes in the Clutha Catchment.
          <br />
          <br />
          All request should be followed up by the requestor for confirmation
          the day before the request.
          <br />
          <br />
          Persons relying on this flow request MUST phone Contacts Clutha
          Control Centre both BEFORE and AFTER kayaking is undertaken. Clutha
          Control Centre operates 24 hours per day and is contactable on 03 440
          0329.
          <br />
          <br />
          The primary risk of the activity is carried by the Applicant and Trip
          Leader. The Trip Leader must be appropriately trained and experienced
          to lead their intended activity.
        </p>
        <BottomButtons page="1" leftButton="Cancel" leftButtonDest="/" rightButton="Next" rightButtonDest="/intialForm" />
      </div>
    </div>
  );
};

export default Form;
