import React from 'react';
import './About.css';
import Card from '../Card/Card';
import js from '../../assets/js.webp';
import react from '../../assets/react.webp';
import laptop from '../../assets/laptop.webp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function About() {
  useGSAP(()=> {
    gsap.from(".circle" , {
      x:-100,duration:1,opacity:0,stagger:0.5,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:true,
   
        start:"top 60%",
        end:"top 20%",


      }
    })
    gsap.from(".line" , {
      x:-100,duration:1,opacity:0,stagger:0.5,
      scrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:true,
      
        start:"top 50%",
        end:"top 30%",
        stagger:1,


      }
      

    })
    gsap.from(".aboutDetails h1" , {
      x:-100,duration:1,opacity:0,stagger:0.5,
      scrollTrigger:{
        trigger:".aboutDetails h1",
        scroll:"body",
        scrub:true,
      
        start:"top 50%",
        end:"top 30%",
        stagger:1,


      }
      

    })
    gsap.from(".aboutDetails ul" , {
      y:100,duration:1,opacity:0,stagger:0.5,
      scrollTrigger:{
        trigger:".aboutDetails ul",
        scroll:"body",
        scrub:true,
   
        start:"top 50%",
        end:"top 30%",
        stagger:1,


      }
      

    })
    gsap.from(".rightAbout" , {
      x:100,duration:1,opacity:0,stagger:0.5,
      scrollTrigger:{
        trigger:".rightAbout",
        scroll:"body",
        scrub:true,

        start:"top 50%",
        end:"top 30%",
        stagger:1,


      }
      

    })
  })
  return (
   <div id="about">
    <div className="leftAbout">
      <div className="circle-line">
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
       
      </div>
      <div className="aboutDetails">
        <div className="personal-info">
          <h1>Personal Info</h1>
          <ul>
            <li><span>NAME</span> : FEEZA KULSOOM</li>
            <li><span>AGE</span> : 18.5</li>
            <li><span>GENDER</span> : FEMALE</li>
            <li><span>LANGUAGE KNOWN</span> : ENGLISH,URDU</li>
          </ul>
        </div>
        <div className="education">
          <h1>Education</h1>
          <ul>
            <li><span>DEGREE</span> : BACHLOR'S-IN PROGRESS</li>
            <li><span>BRANCH</span> : SOFTWARE ENGINEERNG</li>
            <li><span>CGPA</span> : 4.00</li>
           
          </ul>
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <ul>
         <li><span>WHAT I USE</span> : HTML • CSS • JS • REACT • Tailwind • Bootstrap</li>
         <li><span>HOW I LEARN</span> : BUILDING PROJECTS → PORTFOLIO IN PROGRESS</li>
         </ul>
        </div>

      </div>

    </div>
    <div className="rightAbout">
           <Card title="Frontend Development" image={laptop}/>
           <Card title="HTML CSS JS" image={js}/>
           <Card title="React Tailwind Bootstrap" image={react}/>
    </div>

   </div>
  )
}

export default About
