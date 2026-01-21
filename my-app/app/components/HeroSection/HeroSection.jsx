import React from "react";
import "./HeroSection.scss"
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Find & Search Your<br/><span className="highlight-text">Favourite</span> Doctor</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sem velit viverra amet faucibus.</p>
                    <div className="search-bar">
                        <div className="col-3">
                            <i className="bi bi-person-circle"></i>
                            <select>
                                <option value="" disabled selected>Doctor’s Name</option>
                                <option value="HadiDiab">Hadi Diab</option>
                                <option value="MahmoudShadi">Mahmoud Shadi</option>
                            </select>
                        </div>
                        <div className="col-3">
                            <i className="bi bi-geo-alt"></i>
                            <select>
                                <option value="" disabled selected>Location</option>
                                <option value="NewYork">New York</option>
                                <option value="California">California</option>
                            </select>
                        </div>
                        <div className="col-3 search-button">
                            <i className="bi bi-search"></i>
                        </div>
                    </div>
                </div>
                <div className="hero-images">
                    <Image src="/assets/images/doctor.png" alt="Hero Image" fill className="heroImage"  />
                    <Image src="/assets/images/Ellipse_14.png" alt="Hero Image"  fill className="backgroundHeroImage"  />
                </div>
            </div>
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
