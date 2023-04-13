import React from 'react'
import './Mainpage.css'
import bg from './mpbackground.png'
import Navbar from '../Navbar/Navbar'

export default function Mainpage() {
  return (
    <div className='main-area'>
      <div className='main-background'></div>
      <div className='main-content'>
        <div className='main-quote'>
          Get Your <span>Crypto Credits</span>
        </div>
        <div className='main-explore'>
          <div className='main-explore-button'>
            EXPLORE
          </div>
          
        </div>
      </div>
    </div>
  )
}
