import React from "react";
import "./Footer.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-logo">
                    <div className="footer-brand-name-and-text">
                        <h3>E-sheba</h3>
                        <p className="desc1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum</p>
                        <p className="desc2">volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id semper.</p>
                    </div>
                    <div className="footer-social-media">
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-twitter"></i></a>
                    </div>
                </div>
                <div className="footer-links">
                    <h3 className="links-title">Useful Links</h3>
                    <a href="">About Us</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Our Mission</a>
                    <a href="">Our Team</a>
                </div>
                <div className="footer-address"> 
                    <h3 className="address-title">Address</h3>
                    <img src="#" alt="there is no image" />
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
