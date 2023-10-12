import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import BottomButtons from "../components/FormButtons";
import NavigationBarForm from "../components/NavivagtionBarForms";
import Dropdown from "../components/Dropdown.js";
import InformationIcon from "../images/information-outline.png";
import Button from "../components/Button";

export const Formpage3 = () => {
  const [formData3, setFormData3, selectedValue] = useState({
    flowLevel: "",
    Breif: "",
    participants: "",
    NoParticpants: "",
    startDateTime: "",
    endDateTime: "",
    Dropdown: ""
  });

  const [errors, setErrors] = useState({});
  // setting out the error validation prompts for each of the feilds where an input is required to be filled in
  const text = <span>hi</span>;

  const validateForm = () => {
    const newErrors = {};

    if (!formData3.flowLevel) {
      newErrors.flowLevel = "Flow Level is required";
    }
    if (!formData3.startDateTime) {
      newErrors.startDateTime = "Start date time is required";
    }
    if (!formData3.endDateTime) {
      newErrors.endDateTime = "End date time is required";
    }

    if (!formData3.Breif) {
      newErrors.Breif = "Breif is required";
    }

    if (!formData3.participants) {
      newErrors.participants = "A short description of particpants is needed";
    }

    if (!formData3.NoParticpants) {
      newErrors.NoParticpants = "Number of participants is required";
    }

    if (!formData3.Dropdown) {
      newErrors.Dropdown = "Area of request is required";
    }

    return newErrors;
  };

  const nextClick = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log(formData3);

      // Reset the errors state to clear error messages
      setErrors({});
      saveFormData3();
      window.location.href = "/FourthForm";
    } else {
      // Validation failed, set the errors state to display error messages
      setErrors(newErrors);
    }
  };

  // Load saved form data from localStorage when the component mounts
  useEffect(() => {
    const savedFormData3 = JSON.parse(localStorage.getItem("formData3")) || {};
    setFormData3(savedFormData3);
  }, []); // The empty dependency array ensures this effect runs once when the component mounts

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData3({ ...formData3, [name]: value });
  };

  const saveFormData3 = () => {
    try {
      localStorage.setItem("formData3", JSON.stringify(formData3));
    } catch (error) {
      console.error("Error saving data to localStorage:", error);
    }
  };
  const currentDateTime = new Date().toISOString().slice(0, 16);

  const [isDivShow, setIsDivShow] = useState(false);

  // Function to toggle the div's visibility on button click
  const toggleDiv = () => {
    setIsDivShow(!isDivShow);
  };

  // Define the style for the div based on the state
  const divStyle = {
    display: isDivShow ? 'block' : 'none',
  };

  return (
    <div className="request-form">
      <div className="third-form main-content">
      <NavigationBarForm />
        <div class="grey-out" id="grey-out"  style={divStyle}></div>
        <div className="popup" style={divStyle}>
          <h3>Ideal Flows</h3>
            <table className="flow-info">
              <tr>
                <th>Flow Level</th>
                <th>Activity</th>
                <th>Notes</th>
              </tr>
              <tr>
                <td>30 - 50 m&sup3;/s</td>
                <td>River kayaking</td>
                <td>-</td>
              </tr>
              <tr>
                <td>64 m&sup3;/s</td>
                <td>Surfing</td>
                <td>A local favourite!</td>
              </tr>
            </table>
          <br />
          <Button variant="button-primary" onClick={toggleDiv}>Close</Button>
        </div>
        <h1 className="form-heading">Flow and Activity Details</h1>
        <h2 className="form-title-secondary">First Preference Flow Details</h2>

        <form className="container">
          <div className="label-invisible">
          <label htmlFor="flowLevel">
              Required flow/level range (e.g. 30 - 40 m&sup3;/s)
            </label>
            <input
              id="hello"
              type="text"
              name="flowLevel"
              className="text-box full-width"
              placeholder="Required flow/level range (e.g. 30 - 40 m&sup3;/s)"
              value={formData3.flowLevel}
              onChange={handleChange}
            />
            <Link className="" id="info" onClick={toggleDiv}>
              <img src={InformationIcon} className="info-icon" />
            </Link>
            </div>
            <div className="error-message">{errors.flowLevel}</div>



          <Dropdown 
          name="Dropdown" 
          value={formData3.Dropdown}
          onChange={handleChange}
          />
          {errors.Dropdown && (
              <div className="error-message">{errors.Dropdown}</div>
            )}

          <div className="row">
            <label htmlFor="startDateTime">Start date & time</label>
            <input type="datetime-local" name="startDateTime" className="text-box six-twelfths" placeholder="Start date & time (DD/MM/YYYY 00:00)" min={currentDateTime} value={formData3.startDateTime} onChange={handleChange}  />
            
            <label htmlFor="endDateTime">End date & time</label>
            <input type="datetime-local" name="endDateTime" className="text-box six-twelfths" placeholder="End date & time (DD/MM/YYYY 00:00)" value={formData3.endDateTime} onChange={handleChange} />
          </div>

          <div className="error-message-group">
            <div className="error-message six-twelfths">
              {errors.startDateTime}
            </div>
            <div className="error-message six-twelfths">
              {errors.endDateTime}
            </div>
          </div>
        </form>
        <br />
        <form className="container">
          <div className="label-invisible">
            <h2 className="form-title-secondary">Activity Details</h2>
            <label htmlFor="activityDetails">Brief activity description</label>
            <textarea type="text" name="Breif" className="text-box full-width" placeholder="Brief activity description" value={formData3.Breif} onChange={handleChange} />

            <div className="error-message">{errors.Breif}</div>

            <div className="row">
              <label htmlFor="participants">
                Brief participant(s) description
              </label>
              <input className="text-box eight-twelfths" type="text" name="participants" placeholder="Brief participant(s) description" value={formData3.participants} onChange={handleChange} />

              <label htmlFor="NoParticpants">Number of Participants</label>
              <input className="text-box four-twelfths" type="number" name="NoParticpants" placeholder="Number of Participants" value={formData3.NoParticpants} onChange={handleChange} />
            </div>

            <div className="error-message-group">
              <div className="error-message eight-twelfths">
                {errors.participants}
              </div>
              <div className="error-message four-twelfths">
                {errors.NoParticpants}
              </div>
            </div>
          </div>
          <BottomButtons page="4" leftButton="Back" leftButtonDest="/SecondForm" rightButton="Next" rightOnClick={nextClick} />
        </form>
        <BottomButtons page="4" leftButton="Back" leftButtonDest="/SecondForm" rightButton="Next" rightOnClick={nextClick} />
      </div>
    </div>
  );
};

export default Formpage3;
