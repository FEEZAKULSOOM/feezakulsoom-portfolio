import React from 'react'
import Card from '../Card/Card';
import './Projects.css';
import va from '../../assets/va.webp';
import cc from '../../assets/cc.webp';
import wc from '../../assets/wc.webp';
import se from '../../assets/se.webp';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function Projects() {
    useGSAP(()=> {
      gsap.from("#projects-title" , {
        y:100,duration:1,opacity:0,
          stagger:1,
        scrollTrigger:{
          trigger:"#projects-title",
          scroll:"body",
          scrub:true,
      
          start:"top 80%",
          end:"top 30%",
        }
      })
      gsap.from(".slider" , {
        y:100,duration:1,opacity:0,
          stagger:1,
        scrollTrigger:{
          trigger:".slider",
          scroll:"body",
          scrub:true,
       
          start:"top 80%",
          end:"top 30%",
        }
      })
    })
  return (
    <div id="projects">
        <h1 id="projects-title">Learning React & Building Projects</h1>
        <div className="slider">
            <Card title="VIRTUAL ASSISTANT" image={va} />
            <Card title="WEATHER APP" image={wc} />
            <Card title="CURRENCY CONVERTER" image={cc} />
            <Card title="IMAGE SEARCH ENGINE" image={se} />

        </div>
    </div>
  )
}

export default Projects;
