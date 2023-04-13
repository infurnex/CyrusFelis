import React from 'react'
import { useEffect, useRef } from 'react'
import Roadmap from '../Roadmap/Roadmap'
import Collections from '../Collections/Collections'
import './About.css'
import ProjectDescription from '../Description/Description'

import CoreTeam from "../coreteam/Coreteam"

export default function About() {

    const targetone = useRef()
    const targettwo = useRef()
    const targetthree = useRef()
    const targetone24 = useRef()
    const targettwo24 = useRef()
    const targetthree24 = useRef()
  
    const callback = (entries, observer) => { 
      entries.forEach(entry => {
        if(entry.isIntersecting && entry.target.id === 'one' || entry.target.id ==='one24' ){
          entry.target.classList.add('showone')
        }
        else if(entry.isIntersecting &&entry.target.id === 'two' || entry.target.id ==="two24"){
          entry.target.classList.add('showtwo')
        }
        else if(entry.isIntersecting &&entry.target.id === 'three' || entry.target.id ==="three24"){
          entry.target.classList.add('showthree')
        }
      });
    };

    const animation = (entries, observer)=>{
      entries.forEach(entry => {
        console.log(entry.target)
        if(entry.isIntersecting){
          entry.target.classList.add('showw')
        }
      })
    }
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7
    }
    const option2 = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
    const observer = new IntersectionObserver(callback , options);
    const observer2 = new IntersectionObserver(animation , option2);

  
    useEffect(()=>{
      const colns = document.getElementsByClassName('collection')

      observer.observe(targetone.current)
      observer.observe(targettwo.current)
      observer.observe(targetthree.current)
      observer.observe(targetone24.current)
      observer.observe(targettwo24.current)
      observer.observe(targetthree24.current)
      for(let i = 0 ; i<colns.length ; i++){
        observer2.observe(colns[i])
      }
    })

  return (
    <div className='about'>
      <ProjectDescription />
      <Roadmap targetone={targetone} targettwo={targettwo} targetthree={targetthree} targetone24={targetone24} targettwo24={targettwo24} targetthree24={targetthree24}/>
      <Collections />
      <CoreTeam />
    </div>
  )
}
