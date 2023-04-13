import React, {useState} from 'react'
import './Roadmap.css'

export default function Roadmap(props) {
  const [year23 , setyear23] = useState('roadmap')
  const [year24 , setyear24] = useState('hide')

  const year2023 =()=>{
    setyear23('roadmap')
    setyear24('hide')
  }
  const year2024 = ()=>{
    setyear23('hide')
    setyear24('roadmap')
  }
  
  return (
    <div className='roadmap-area'>
      <div className='roadmap-heading'>
        <div className='heading'>
          Roadmap
        </div>
        <div className='roadmap-year'>
          <div className='year' onClick={year2023}>
            2023
          </div>
          <div className='year' onClick={year2024}>
            2024
          </div>
        </div>
      </div>
      <div className={year23}>
        <section ref={props.targetone} id='one'>
          <div className='milestone-logo'>

          </div>
          <div className='milestone-details'>
            <div className='brief'>
              <div>
                Project Launch
              </div>
              <div>
                Mid May
              </div>
            </div>
            <div className='seperate'></div>
            <div className='detailed'>
              <ul>
                <li>
                product will be launched in its early stage at
                </li>
                <li>
                  this project will be in development phase
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section ref={props.targettwo} id='two'>
          <div className='milestone-logo'>
            
          </div>
          <div className='milestone-details'>
            <div className='brief'>
              <div>
                Research and lineups
              </div>
              <div>
                July
              </div>
            </div>
            <div className='seperate'></div>
            <div className='detailed'>
              <ul>
                <li>
                product will be launched in its early stage at
                </li>
                <li>
                  this project will be in development phase
                </li>
              </ul>

            </div>
          </div>
        </section>
        <section ref={props.targetthree} id='three'> 
          <div className='milestone-logo'>

          </div>
          <div className='milestone-details'>
            <div className='brief'>
              <div>
                Mathematical ML model
              </div>
              <div>
                october
              </div>
            </div>
            <div className='seperate'></div>
            <div className='detailed'>
              <ul>
                <li>
                product will be launched in its early stage at
                </li>
                <li>
                  this project will be in development phase
                </li>
              </ul>

            </div>
          </div>
        </section>   
      </div>
      <div className={year24}>
      <section ref={props.targetone24} id='one24'>
          <div className='milestone-logo'>

          </div>
          <div className='milestone-details'>
          <div className='brief'>
              <div>
                exclusive Model launch
              </div>
              <div>
                coming soon
              </div>
            </div>
            <div className='seperate'></div>

            <div className='detailed'>
              <ul>
                <li>
                product will be launched in its early stage at
                </li>
                <li>
                  this project will be in development phase
                </li>
              </ul>

            </div>
          </div>
      </section>
        <section ref={props.targettwo24} id='two24'>
          <div className='milestone-logo'>

          </div>
          <div className='milestone-details'>
          <div className='brief'>
              <div>
                collaborations
              </div>
              <div>
                coming soon
              </div>
            </div>
            <div className='seperate'></div>

            <div className='detailed'>
              <ul>
                <li>
                product will be launched in its early stage at
                </li>
                <li>
                  this project will be in development phase
                </li>
              </ul>

            </div>
          </div>
        </section>
        <section ref={props.targetthree24} id='three24'>
          <div className='milestone-logo' >

          </div>
          <div className='milestone-details'>
          <div className='brief'>
              <div>
                Final Model launch
              </div>
              <div>
                coming soon
              </div>
            </div>
            <div className='seperate'></div>

            <div className='detailed'>
              <ul>
                <li>
                product will be launched in its early stage at
                </li>
                <li>
                  this project will be in development phase
                </li>
              </ul>

            </div>
          </div>
        </section>   
      </div>
    </div>
  )
}
