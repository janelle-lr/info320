import React from "react";
import "./FormButtons.css";
import { Link } from "react-router-dom";

// Components
import "../components/Layout.css";
import "../components/Texts.css";
import Button from "../components/Button";

export const FormButtons = ({
  page,
  leftButton,
  leftButtonDest,
  rightButton,
  rightButtonDest, }) => {
  return (
    <div className="form-bottom-buttons">
      <Button variant="button-secondary" destination={leftButtonDest}>
        {leftButton}
      </Button>
      <h4 className="page-no">{page} of 7</h4>
      <Button variant="button-primary" destination={rightButtonDest}>
        {rightButton}
      </Button>
    </div>
  );
};

export default FormButtons;