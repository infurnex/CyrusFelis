import React from 'react'
import './Mainpage.css'
import bg from './mpbackground.png'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

export default function Mainpage() {
  return (
    <div className='main-area'>
      <div className='main-background'></div>
      <div className='main-content'>
        <div className='main-quote'>
          Get Your <span>Crypto Credits</span>
        </div>
        <div className='main-explore'>
          <Link to='/about' style={{textDecoration : 'none'}}>
          <div className='main-explore-button'>
            EXPLORE
          </div>
          </Link>
          
        </div>
      </div>
    </div>
  )
}
