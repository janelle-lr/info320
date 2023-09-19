import React from 'react';

// Components
import logo from "../images/contactLogo.png";
import BottomButtons from "../components/FormButtons"

export const Formpage4 = () => {
  return (
    <div className="request-form section-container">
      <div className="first-form main-content">
        <img src={logo} className="form-contact-logo" />
        <h1 className="form-heading">Flow and Activity Details</h1>
        <h2 className="form-title-secondary">Secondary Preference Flow Details</h2>
        <p className="form-paragraph">In case your preferred flow request gets declined, please provide other suitable times and areas the activity can be undertake.</p>

        <form className="container">
          <div className="label-invisible">
            <label htmlFor="flowLevel">Required flow/level range (e.g. 30 - 40 m&sup3;/s)</label>
            <input type="text" name="flowLevel" className="text-box full-width" placeholder="Required flow/level range (e.g. 30 - 40 m&sup3;/s)" />

            <label htmlFor="requestArea">Area of Request</label>
            <input type="text" name="requestArea" className="text-box full-width" placeholder="Area of Request" />
          </div>

          <div className="row">
            <label htmlFor="startDateTime">Start date & time</label>
            <input type="datetime-local" name="startDateTime" className="text-box six-twelfths" placeholder="Start date & time (DD/MM/YYYY 00:00)" />

            <label htmlFor="endDateTime">End date & time</label>
            <input type="datetime-local" name="endDateTime" className="text-box six-twelfths" placeholder="End date & time (DD/MM/YYYY 00:00)" />
          </div>
        </form>

        <BottomButtons page="5" leftButton="Back" leftButtonDest="/ThirdForm" rightButton="Next" rightButtonDest="/FifthForm" />
      </div>
    </div>
  );
};

export default Formpage4;