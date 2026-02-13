import React from 'react'
import contact from "../../assets/contact.webp";
import "./Contact.css";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
function Contact() {
  useGSAP(()=> {
gsap.from(".leftContact img" , {
        x:-100,duration:1,opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger:".leftContact img",
          scroll:"body",
          scrub:true,
       
          start:"top 80%",
          end:"top 30%",
        }
      })
gsap.from("form" , {
        x:-100,duration:1,opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger:"form",
          scroll:"body",
          scrub:true,
       
          start:"top 80%",
          end:"top 30%",
        }
      })
  })
  return (
   <div id="contact">
    <div className="leftContact">
        <img src={contact} alt="contact" />
  </div>
         <div className="rightContact">
            <form action="https://formspree.io/f/maqdepwg" method="POST">
                <input  name="userName" type="text" placeholder='Name'/>
                <input  name="email" type="email" placeholder='Email'/>
            <textarea name="message" id="textarea" placeholder='message me'></textarea>
            <input type="submit" id="btn" value="Submit"/>


            </form>
         </div>

   </div>
   
  )
}

export default Contact
