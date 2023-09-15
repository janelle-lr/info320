import { Link } from "react-router-dom";
import "./Button.css";
import React from "react";

const Button = ({ variant, children, onClick, destination }) => {
  const classNames = `button ${variant}`;

  return (
    // <button className={classNames} onClick={onClick}>
    //   {/* {children} */}
    //   <Link to={to}>{children}</Link>
    // </button>
    <Link className={classNames} to={destination}>
      {children}
    </Link>
  );
};

export default Button;
