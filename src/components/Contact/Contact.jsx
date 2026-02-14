import React from 'react';
import contact from "../../assets/contact.webp";
import "./Contact.css";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Register GSAP ScrollTrigger plugin for scroll-based animations
gsap.registerPlugin(ScrollTrigger);

/**
 * Contact Component
 * Displays contact illustration and form
 * Features scroll-triggered animations and Formspree integration
 */
function Contact() {
    // Scroll-triggered animations for contact section elements
    useGSAP(() => {
        // Animate contact image sliding in from left
        gsap.from(".leftContact img", {
            x: -100, duration: 1, opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: ".leftContact img",
                scroll: "body",
                scrub: true,           // Animation follows scroll position
                start: "top 80%",
                end: "top 30%",
            }
        });

        // Animate contact form sliding in from left
        gsap.from("form", {
            x: -100, duration: 1, opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: "form",
                scroll: "body",
                scrub: true,
                start: "top 80%",
                end: "top 30%",
            }
        });
    });

    return (
        <div id="contact">
            {/* ===== LEFT COLUMN - Contact Illustration ===== */}
            <div className="leftContact">
                <img src={contact} alt="Contact illustration" />
            </div>

            {/* ===== RIGHT COLUMN - Contact Form ===== */}
            <div className="rightContact">
                {/* Formspree endpoint for form submission */}
                <form action="https://formspree.io/f/maqdepwg" method="POST">
                    {/* Name input field */}
                    <input name="userName" type="text" placeholder='Name' />
                    
                    {/* Email input field */}
                    <input name="email" type="email" placeholder='Email' />
                    
                    {/* Message textarea */}
                    <textarea name="message" id="textarea" placeholder='message me'></textarea>
                    
                    {/* Submit button */}
                    <input type="submit" id="btn" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Contact;