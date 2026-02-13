import React from 'react'
import './Nav.css';
import {Link} from "react-scroll";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
function Nav() {
  let menu= useRef();
  let mobile= useRef();
  useGSAP(()=>{
    let tl=gsap.timeline();
   tl.from("nav h1", {
    y:-100,
    duration:1,
    opacity:0,
   })
   tl.from("nav ul li", {
    y:-100,
    duration:0.5,
    opacity:0,
    stagger:0.2
  })
}
)

  return (
    <nav>
        <h1>PORTFOLIO</h1>
        <ul  className='desktopMenu'>
            <Link to="home" spy={true}  activeClass="active" smooth={true}  duration={500}><li>Home</li></Link>
            <Link to="about" spy={true} activeClass="active" smooth={true}  duration={500}><li>About</li></Link>
            <Link to="projects" spy={true} activeClass="active" smooth={true}  duration={500}><li>Projects</li></Link>
            <Link to="contact" spy={true} activeClass="active" smooth={true}  duration={500}><li>Contact</li></Link>
      
</ul>
<div className="hamburger" ref={menu} onClick={ ()=>{
    mobile.current.classList.toggle("activeMobile");
      menu.current.classList.toggle("activeHam");
}}>
  <div className="ham"></div>
  <div className="ham"></div>
  <div className="ham"></div>
</div>
        <ul  className='mobileMenu' ref={mobile}>
            <Link to="home" spy={true}  activeClass="active" smooth={true} offset={-80} duration={500}><li>Home</li></Link>
            <Link to="about" spy={true} activeClass="active" smooth={true} offset={-80} duration={500}><li>About</li></Link>
            <Link to="projects" spy={true} activeClass="active" smooth={true} offset={-80} duration={500}><li>Projects</li></Link>
            <Link to="contact" spy={true} activeClass="active" smooth={true} offset={-80} duration={500}><li>Contact</li></Link>
      
</ul>

    </nav>
  )
}

export default Nav
