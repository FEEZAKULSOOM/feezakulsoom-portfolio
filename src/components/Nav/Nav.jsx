import React from 'react';
import './Nav.css';
import { Link } from "react-scroll";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

/**
 * Navigation Component
 * Provides fixed navigation with desktop and mobile views
 * Features smooth scrolling to sections and responsive menu toggle
 */
function Nav() {
    // Refs for DOM manipulation
    let menuRef = useRef();      // Ref for hamburger button
    let mobileRef = useRef();    // Ref for mobile menu panel

    // Entrance animation for navigation elements
    useGSAP(() => {
        let tl = gsap.timeline();
        tl.from("nav h1", {
            y: -100,
            duration: 1,
            opacity: 0,
        });
        tl.from("nav ul li", {
            y: -100,
            duration: 0.5,
            opacity: 0,
            stagger: 0.2          // Staggered animation for each item
        });
    });

    return (
        <nav>
            {/* Logo */}
            <h1>PORTFOLIO</h1>
            
            {/* ===== DESKTOP MENU ===== */}
            <ul className='desktopMenu'>
                <Link to="home" spy={true} activeClass="active" smooth={true} duration={500}><li>Home</li></Link>
                <Link to="about" spy={true} activeClass="active" smooth={true} duration={500}><li>About</li></Link>
                <Link to="projects" spy={true} activeClass="active" smooth={true} duration={500}><li>Projects</li></Link>
                <Link to="contact" spy={true} activeClass="active" smooth={true} duration={500}><li>Contact</li></Link>
            </ul>
            
            {/* ===== HAMBURGER MENU BUTTON ===== */}
            <div 
                className="hamburger" 
                ref={menuRef} 
                onClick={() => {
                    // Toggle mobile menu visibility and hamburger animation
                    mobileRef.current.classList.toggle("activeMobile");
                    menuRef.current.classList.toggle("activeHam");
                }}
            >
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </div>
            
            {/* ===== MOBILE MENU ===== */}
            <ul className='mobileMenu' ref={mobileRef}>
                <Link to="home" spy={true} activeClass="active" smooth={true} offset={-80} duration={500}><li>Home</li></Link>
                <Link to="about" spy={true} activeClass="active" smooth={true} offset={-80} duration={500}><li>About</li></Link>
                <Link to="projects" spy={true} activeClass="active" smooth={true} offset={-80} duration={500}><li>Projects</li></Link>
                <Link to="contact" spy={true} activeClass="active" smooth={true} offset={-80} duration={500}><li>Contact</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;