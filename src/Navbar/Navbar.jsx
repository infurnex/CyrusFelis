import React, { useState } from 'react'
import './Navbar.css'
import discord from './discord-logo.png'
import twitter from './Twitter-logo.png'
import Cyrusfelis from './Cyrusfelis.png'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const [c1 , setc1] = useState()
  const [c2, setc2] = useState()
  const [c3 , setc3] = useState()
  const [c4 , setc4] = useState()

  const setClass = (classnumber) =>{
    setc1('#22577A')
    setc2('#22577A')
    setc3('#22577A')
    setc4('#22577A')
    if(classnumber === 1){
      setc1('#F10A05')
    }
    else if(classnumber === 2){
      setc2('#F10A05')
    }
    else if(classnumber === 3){
      setc3('#F10A05')
    }
    else{
      setc4('#F10A05')
    }

  }

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={Cyrusfelis}></img>
      </div>
      <div className='navbar-routes'>
        <Link to='/about' style={{textDecoration : 'none'}}>
          <div className='navbar-route' style={{color: c1}} onClick={()=>{setClass(1)}}>
            About
          </div>
        </Link>
        <Link to='/story' style={{textDecoration : 'none'}}>
          <div className='navbar-route' style={{color: c2}} onClick={()=>{setClass(2)}}>
            Story
          </div>
        </Link>
        <Link to='/whiteboard' style={{textDecoration : 'none'}}>
          <div className='navbar-route' style={{color: c3}} onClick={()=>{setClass(3)}}>
            Whitepaper
          </div>
        </Link>

        <div className='navbar-route' style={{color: c4}} onClick={()=>{setClass(4)}}>
          FAQ
        </div>
      </div>
      <div className='navbar-links'>
        <img src={twitter}></img>
        <img src={discord}></img>
      </div>
    </div>
  )
}
