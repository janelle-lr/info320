import React from "react";
import "./Footer.css";
import contactLogo from "../images/contactLogo.png";


const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
            {/* <h3>Flow</h3>
            <p>© 2020 Flow. All rights reserved.</p> */}
            <img className="footer-logo" src={contactLogo} alt="Flow Logo" />
        </div>
        </footer>
    );
};

export default Footer;
