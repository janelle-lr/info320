import { Link } from "react-router-dom";
import "./Button.css";
import React from "react";

const Button = ({ variant, children, onClick, destination }) => {
  const classNames = `button ${variant}`;

  const handleClick = (e) => {     // Execute the provided onClick function, if any    
    if (onClick) {       onClick(e);     }     // You can add additional logic here if needed    // For example, you can prevent navigation under certain conditions:    // if (someCondition) {    //   e.preventDefault();    // }  
  };
  return (
    // <button className={classNames} onClick={onClick}>
    //   {/* {children} */}
    //   <Link to={to}>{children}</Link>
    // </button>
    <Link className={classNames} to={destination} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default Button;