import "./Button.css";
import React from "react";

const Button = ({ variant, children, onClick }) => {
  const classNames = `button ${variant}`;

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
