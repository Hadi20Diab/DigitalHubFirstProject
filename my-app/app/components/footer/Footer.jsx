import React from "react";
import "./Footer.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

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
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
                    </div>
                </div>
                <div className="footer-links">
                    <h2 className="links-title">Useful Links</h2>
                    <a href="">About Us</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Our Mission</a>
                    <a href="">Our Team</a>
                </div>
                <div className="footer-address"> 
                    <h2 className="address-title">Address</h2>
                    <a href="https://maps.app.goo.gl/7mzAXH2oQG7JzNpQA" target="_blank" rel="noopener noreferrer"><img src="./Rectangle 18.png" alt="there is no image" /></a>
                </div>
            </div>
            <div className="footer-copyright">
                <hr style={{width: "85%" , margin: "0 auto", marginTop: "20px", marginBottom: "20px"}}/>
                <p>© 2026 All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
