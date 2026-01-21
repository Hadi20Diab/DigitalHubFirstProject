import React from "react";
import "./HeroSection.scss"

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div></div>
            <div className="row-features">
                <div className="col-3">
                    <h3>24/7</h3>
                    <p>Online Support</p>
                </div>
                <span className="vertical-line"></span>
                <div className="col-3">
                    <h3>100+</h3>
                    <p>Doctors</p>
                </div>
                <span className="vertical-line"></span>
                <div className="col-3">
                    <h3>1M+</h3>
                    <p>Active Patients</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
