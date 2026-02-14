import React from 'react';
import Card from '../Card/Card';
import './Projects.css';
import va from '../../assets/va.webp';
import cc from '../../assets/cc.webp';
import wc from '../../assets/wc.webp';
import se from '../../assets/se.webp';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Register GSAP ScrollTrigger plugin for scroll-based animations
gsap.registerPlugin(ScrollTrigger);

/**
 * Projects Component
 * Displays portfolio projects in a horizontal scrollable slider
 * Features scroll-triggered animations for section title and slider
 */
function Projects() {
    // Scroll-triggered animations for projects section
    useGSAP(() => {
        // Animate section title from below
        gsap.from("#projects-title", {
            y: 100, duration: 1, opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: "#projects-title",
                scroll: "body",
                scrub: true,           // Animation follows scroll position
                start: "top 80%",
                end: "top 30%",
            }
        });

        // Animate slider container from below
        gsap.from(".slider", {
            y: 100, duration: 1, opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: ".slider",
                scroll: "body",
                scrub: true,
                start: "top 80%",
                end: "top 30%",
            }
        });
    });

    return (
        <div id="projects">
            <h1 id="projects-title">Learning React & Building Projects</h1>
            
            {/* Horizontal slider containing project cards */}
            <div className="slider">
                <Card title="VIRTUAL ASSISTANT" image={va} />
                <Card title="WEATHER APP" image={wc} />
                <Card title="CURRENCY CONVERTER" image={cc} />
                <Card title="IMAGE SEARCH ENGINE" image={se} />
            </div>
        </div>
    );
}

export default Projects;