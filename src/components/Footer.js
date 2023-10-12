import React from "react";
import "./Footer.css";
import contactLogo from "../images/contactLogoWhite.png";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer_blocks">
                    <div class="footer_image">
                        <div class="footer_blocks_links">
                            <a href="https://contact.co.nz/legal" rel="noopener noreferrer" target="_blank">
                                <span>Legal</span>
                                </a>
                                <a href="https://contact.co.nz/legal/terms-and-conditions" rel="noopener noreferrer" target="_blank">
                                <span>T&C's</span>
                                </a>
                                <a href="https://contact.co.nz/legal/privacy" rel="noopener noreferrer" target="_blank">
                                    <span>Privacy</span>
                                </a>
                                <img src={contactLogo} alt="ContactLogo" id="footerLogo" />

                                <div>© Contact Energy Ltd, All rights reserved 2023</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
