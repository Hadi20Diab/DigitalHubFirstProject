"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import "./Navbar.scss"

const Navbar = () => {
    const pathname = usePathname();
    
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        try {
            const stored = localStorage.getItem("theme");
            if (stored === "light" || stored === "dark") {
                setTheme(stored);
                document.documentElement.setAttribute("data-theme", stored);
            } else {
                const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                const initial = prefersDark ? "dark" : "light";
                setTheme(initial);
                document.documentElement.setAttribute("data-theme", initial);
            }
        } catch (e) {
            // localStorage might be unavailable in some environments
        }
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        try {
            localStorage.setItem("theme", next);
        } catch (e) {}
        document.documentElement.setAttribute("data-theme", next);
    };

    return (
        <>
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
                    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === "dark" ? "🌙" : "☀️"}
                    </button>
                    <Link href="/login" className="button button-1">Login</Link>
                    <Link href="/signup" className="button button-2">Signup</Link>
                </div>
            </section>
            {pathname === "/" && <HeroSection />}
        </>
    );
};

export default Navbar;
