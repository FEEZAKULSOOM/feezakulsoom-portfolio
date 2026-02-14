import React from 'react';
import './Home.css';
import avatar from '../../assets/avatar.webp';
import { Typewriter } from 'react-simple-typewriter';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

/**
 * Home Component - Hero Section
 * Displays introduction, name, animated typewriter effect, and profile image
 * Features entrance animations on page load
 */
function Home() {
    // Entrance animations for home section elements
    useGSAP(() => {
        let tl1 = gsap.timeline();
        tl1.from(".line1", { y: 100, opacity: 0, duration: 1 })
           .from(".line2", { y: 100, opacity: 0, duration: 1 }, "-=0.5")
           .from(".line3", { y: 80, opacity: 0, duration: 1 }, "-=0.5")
           .from(".rightHome", { x: 200, opacity: 0, duration: 1 }, "-=0.3");
    });

    return (
        <div id="home">
            {/* ===== LEFT COLUMN - Text Content ===== */}
            <div className="leftHome">
                <div className="homeDetails">
                    <div className="line1">I'M</div>
                    <div className="line2">Feeza Kulsoom</div>
                    <div className="line3">
                        {/* Typewriter effect for dynamic text */}
                        <Typewriter
                            words={["Frontend Developer"]}
                            loop={0}              // 0 = infinite loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                    
                    {/* Call-to-action button */}
                    <button className="btn">Hire Me</button>
                </div>
            </div>

            {/* ===== RIGHT COLUMN - Profile Image ===== */}
            <div className="rightHome">
                <img 
                    src={avatar} 
                    alt="Feeza Kulsoom - Frontend Developer"
                    width="400" 
                    height="400"
                    loading="eager"           // Critical image - load immediately
                    fetchPriority="high"       // Prioritize this image
                />
            </div>
        </div>
    );
}

export default Home;