import { Link } from "react-router-dom";
import "./Button.css";
import React from "react";

const Button = ({ variant, children, onClick, destination }) => {
  const classNames = `button ${variant}`;

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link className={classNames} to={destination} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default Button;