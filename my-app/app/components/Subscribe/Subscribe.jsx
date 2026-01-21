import React from "react";
import "./Subscribe.scss"

const Subscribe = () => {
    return (
        <section>
            <div className="Subscribe-section">
                <h1>Subscribe to our Newsletter</h1>
                <div className="input-wrapper">
                    <input type="text"/>
                    <button className="submit-btn">
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
