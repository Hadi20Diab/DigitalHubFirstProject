"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.scss"

const Navbar = () => {
    const pathname = usePathname();
    
    return (
        <section className="navSection row">
            <div className="logo-text"><h1>E-<span>sheba</span></h1></div>
            <nav>
                <ul>
                    <li><Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link></li>
                    <li><Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link></li>
                    <li><Link href="/application" className={pathname === "/application" ? "active" : ""}>Application</Link></li>
                    <li><Link href="/history" className={pathname === "/history" ? "active" : ""}>History</Link></li>
                </ul>
            </nav>
            <div className="row">
                <Link href="/login" className="button button-1">Login</Link>
                <Link href="/signup" className="button button-2">Signup</Link>
            </div>
        </section>
    );
};

export default Navbar;
