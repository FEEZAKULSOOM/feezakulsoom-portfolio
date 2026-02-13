import React from 'react'
import './Home.css';
import avatar from '../../assets/avatar.webp';
import { Typewriter } from 'react-simple-typewriter';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
function Home() {
    useGSAP(()=> {
      let tl1 = gsap.timeline();
      tl1.from(".line1", {y: 100, opacity: 0, duration: 1})
      tl1.from(".line2", {y: 100, opacity: 0, duration: 1})
      tl1.from(".line3", {y: 80, opacity: 0, duration: 1})
      tl1.from(".rightHome", {x:200, opacity: 0, duration: 1})
     
    })
  return (
    <div id="home">
        <div className="leftHome">
         <div className="homeDetails">
              <div className="line1">I'M</div>
              <div className="line2">Feeza Kulsoom</div>
              <div className="line3">
            
        <Typewriter
          words={["Frontend Developer"]}
          loop={0}       // 0 = infinite
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
              </div>
              
              <button className="btn">Hire Me</button>
         </div>
        </div>
     
       <div className="rightHome">
  <img 
    src={avatar} 
    alt="Feeza Kulsoom - Frontend Developer"
    width="400" 
    height="400"
    loading="eager"
    fetchPriority="high"        // CRITICAL: Add this
            // Add this too
  />
</div>
          

    </div>
  )
}

export default Home;
