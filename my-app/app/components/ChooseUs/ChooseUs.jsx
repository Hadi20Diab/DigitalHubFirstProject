import React from "react";
import "./ChooseUs.scss"

const ChooseUs = () => {
    return (
        <section className="ChooseUs-section">
            <img src="./assets/images/Rectangle 11.png" alt="Why Choose Us" />
           <div className="ChooseUs-text">
              <h1 className="ChooseUS-title">Why You Choose Us?</h1>
              <div className="ChooseUs-points">
                <div className="ChooseUs-point">
                    <i className="bi bi-check"></i>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
                </div>
                <div className="ChooseUs-point">
                    <i className="bi bi-check"></i>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
                </div>
                <div className="ChooseUs-point">
                    <i className="bi bi-check"></i>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
                </div>
                <div className="ChooseUs-point">
                    <i className="bi bi-check"></i>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
                </div>
                <div className="ChooseUs-point">
                    <i className="bi bi-check"></i>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
                </div>
              </div>
           <a href="">Learn More <i className="bi bi-arrow-right"></i></a>
           </div>
        </section>
    );
};

export default ChooseUs;
