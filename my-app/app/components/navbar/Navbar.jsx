import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (
        <section className="navSection row">
            <div className="logo-text"><h1>E-<span>sheba</span></h1></div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/application">Application</a></li>
                    <li><a href="/history">History</a></li>
                </ul>
            </nav>
            <div className="row">
                <a href="/login" className="button button-1">Login</a>
                <a href="/signup" className="button button-2">Signup</a>
            </div>
        </section>
    );
};

export default Navbar;
