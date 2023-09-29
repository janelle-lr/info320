import React from "react";

// Components
import logo from "../images/contactLogo.png";
import BottomButtons from "../components/FormButtons";
import NavigationBarForm from "../components/NavivagtionBarForms";

export const Formpage5 = () => {
  return (
    <div className="request-form section-container">
      <div className="fifth-form main-content">
        <NavigationBarForm />
        {/* <img src={logo} className="form-contact-logo" /> */}
        <h1 className="form-heading">Health and Safety</h1>
        <form className="label-visible">
          <input
            className="checkbox"
            type="checkbox"
            name="riverFreq"
            value=""
          />
          <label htmlFor="riverFreq">
            {" "}
            Have you been down the river before?
          </label>
          <br />
          <input
            className="checkbox"
            type="checkbox"
            name="riverHazard"
            value=""
          />

          <label htmlFor="riverHazard">
            {" "}
            Have you considered the hazards on the river?
          </label>
          <br />
          <input className="checkbox" type="checkbox" name="hsePlan" value="" />
          <label htmlFor="hsePlan">
            {" "}
            Do you have a Health, Safety and Environment plan?
          </label>
          <br />
          {/* <label>Insert Files</label>
          <input type="file" /> */}
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
