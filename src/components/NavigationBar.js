import React from "react";
import "./NavigationBar.css";
import contactLogo from "../images/contactLogo.png";

const NavigationBar = () => {
    return (
        <div className="navigation">
            <nav className="navbar">
                <a href="#">
                    <img className="logo" src={contactLogo} alt="Contact Energy Logo" />
                </a>
                <a href="#">Electricity</a>
                <a href="#">Gas</a>
                <a href="#">Broadband</a>
                <a href="#">Mobile</a>
                <a href="#">Moving house</a>
                <a href="#">Help & Support</a>
            </nav>
        </div>
    );
};

export default NavigationBar;