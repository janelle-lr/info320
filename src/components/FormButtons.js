import React from "react";
import "./FormButtons.css";

// Components
import "../components/Layout.css";
import "../components/Texts.css";
import Button from "../components/Button";

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

  const handleRightClick = (e) => {
    if (rightOnClick) rightOnClick(e);
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
