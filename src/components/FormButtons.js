import React from "react";
import "./FormButtons.css";
import { Link } from "react-router-dom";

// Components
import "../components/Layout.css";
import "../components/Texts.css";
import Button from "../components/Button";
import logo from "../images/contactLogo.png";

export const FormButtons = ({
  page,
  leftButton,
  leftButtonDest,
  leftOnClick,
  rightButton,
  rightButtonDest,
  rightOnClick }) => {

    const handleLeftClick = (e) => {
      if (leftOnClick) leftOnClick(e);
    };

    const handleRightClick = (e) => {     // Execute the provided onClick function, if any    
      if (rightOnClick) rightOnClick(e);     // You can add additional logic here if needed    // For example, you can prevent navigation under certain conditions:    // if (someCondition) {    //   e.preventDefault();    // }  
    };

    return (
    <div className="form-bottom-buttons">
      <Button variant="button-secondary" destination={leftButtonDest} onClick={handleLeftClick} >
        {leftButton}
      </Button>
      <h4 className="page-no">{page} of 7</h4>
      <Button variant="button-primary" destination={rightButtonDest} onClick={handleRightClick}> 
        {rightButton}
      </Button>
    </div>
  );
};

export default FormButtons;
