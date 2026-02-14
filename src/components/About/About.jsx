import React from 'react';
import './About.css';
import Card from '../Card/Card';
import js from '../../assets/js.webp';
import react from '../../assets/react.webp';
import laptop from '../../assets/laptop.webp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin for scroll-based animations
gsap.registerPlugin(ScrollTrigger);

/**
 * About Component
 * Displays personal information, education, skills, and technology stack
 * Features scroll-triggered animations for visual timeline and content
 */
function About() {
  // Scroll-triggered animations for all about section elements
  useGSAP(() => {
    // Animate timeline circles from left with staggered delay
    gsap.from(".circle", {
      x: -100, duration: 1, opacity: 0, stagger: 0.5,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: true,           // Animation follows scroll position
        start: "top 60%",
        end: "top 20%",
      }
    })

    // Animate connecting lines between circles
    gsap.from(".line", {
      x: -100, duration: 1, opacity: 0, stagger: 0.5,
      scrollTrigger: {
        trigger: ".line",
        scroll: "body",
        scrub: true,
        start: "top 50%",
        end: "top 30%",
        stagger: 1,
      }
    })

    // Animate section headings
    gsap.from(".aboutDetails h1", {
      x: -100, duration: 1, opacity: 0, stagger: 0.5,
      scrollTrigger: {
        trigger: ".aboutDetails h1",
        scroll: "body",
        scrub: true,
        start: "top 50%",
        end: "top 30%",
        stagger: 1,
      }
    })

    // Animate list items (personal info, education, skills)
    gsap.from(".aboutDetails ul", {
      y: 100, duration: 1, opacity: 0, stagger: 0.5,
      scrollTrigger: {
        trigger: ".aboutDetails ul",
        scroll: "body",
        scrub: true,
        start: "top 50%",
        end: "top 30%",
        stagger: 1,
      }
    })

    // Animate right column cards
    gsap.from(".rightAbout", {
      x: 100, duration: 1, opacity: 0, stagger: 0.5,
      scrollTrigger: {
        trigger: ".rightAbout",
        scroll: "body",
        scrub: true,
        start: "top 50%",
        end: "top 30%",
        stagger: 1,
      }
    })
  })

  return (
    <div id="about">
      {/* ===== LEFT COLUMN ===== */}
      <div className="leftAbout">
        {/* Visual timeline with circles and connecting lines */}
        <div className="circle-line">
          <div className="circle"></div>     {/* First milestone */}
          <div className="line"></div>       {/* Connector */}
          <div className="circle"></div>     {/* Second milestone */}
          <div className="line"></div>       {/* Connector */}
          <div className="circle"></div>     {/* Third milestone */}
        </div>

        {/* Personal information sections */}
        <div className="aboutDetails">
          {/* Personal Info Section */}
          <div className="personal-info">
            <h1>Personal Info</h1>
            <ul>
              <li><span>NAME</span> : FEEZA KULSOOM</li>
              <li><span>AGE</span> : 18.5</li>
              <li><span>GENDER</span> : FEMALE</li>
              <li><span>LANGUAGE KNOWN</span> : ENGLISH,URDU</li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li><span>DEGREE</span> : BACHLOR'S-IN PROGRESS</li>
              <li><span>BRANCH</span> : SOFTWARE ENGINEERNG</li>
              <li><span>CGPA</span> : 4.00</li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li><span>WHAT I USE</span> : HTML • CSS • JS • REACT • Tailwind • Bootstrap</li>
              <li><span>HOW I LEARN</span> : BUILDING PROJECTS → PORTFOLIO IN PROGRESS</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== RIGHT COLUMN ===== */}
      <div className="rightAbout">
        {/* Technology stack cards */}
        <Card title="Frontend Development" image={laptop} />
        <Card title="HTML CSS JS" image={js} />
        <Card title="React Tailwind Bootstrap" image={react} />
      </div>
    </div>
  )
}

export default About;