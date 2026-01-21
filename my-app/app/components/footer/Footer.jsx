import React from "react";
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-logo">
                    <div className="footer-brand-name-and-text">
                        <h2>E-sheba</h2>
                        <p className="desc1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum</p>
                        <p className="desc2">volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id semper.</p>
                    </div>
                    <div className="footer-social-media">
                        <a href="">FC</a>
                        <a href="">IN</a>
                        <a href="">TW</a>
                    </div>
                </div>
                <div className="footer-links">
                    <h2>Useful Links</h2>
                    <a href="">About Us</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Our Mission</a>
                    <a href="">Our Team</a>
                </div>
                <div className="footer-address"> 
                    <h2>Address</h2>
                    <img src="#" alt="there is no image" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>© 2026 All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
