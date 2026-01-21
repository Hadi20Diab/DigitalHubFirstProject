import React from "react";
import "./Specialist.scss"

const Specialist = () => {
    return (
        <section className="Specialist-section">
           <h1>Our Consulting Specialists</h1>
            <div className="specialist-cards">
                <div className="specialist-card">
                    <img src="./assets/icons/Vector.svg" alt="Specialist 1"  className="specialist-icon"/>
                    <h2>Covid-19 Test</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
                </div>
                <div className="specialist-card">
                    <img src="./assets/icons/Vector (1).svg" alt="Specialist 1" className="specialist-icon" />
                    <h2>Heart Lungs</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
                </div>
                <div className="specialist-card">
                    <img src="./assets/icons/Vector (2).svg" alt="Specialist 1" className="specialist-icon" />
                    <h2>Suppliment</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
                </div>
                <div className="specialist-card">
                    <img src="./assets/icons/Vector (3).svg" alt="Specialist 1" className="specialist-icon"/>
                    <h2>Mental Health</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
                </div>
            </div>
        </section>
    );
};

export default Specialist;
