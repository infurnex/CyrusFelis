import React from 'react'
import './Collections.css'
import col1 from './col1.png'
import col2 from './col2.png'
import col3 from './col3.png'
import col4 from './col4.png'
import col5 from './col5.png'
import col6 from './col6.png'
import col7 from './col7.png'
import col8 from './col8.png'





export default function Collections(props) {
  return (
    <div className='collection-area'>
      <div className='collection-heading'>
        Arts & Collections 
      </div>
      <div className='collections'>
        <div className='collection'>
            <img src={col1}>
            </img>
            <div>

            </div>
        </div>
        <div className='collection'>
            <img src={col2}>
            </img>
            <div>
                
            </div>
        </div>
        <div className='collection'>
            <img src={col3}>
            </img>
            <div>
                
            </div>
        </div>
        <div className='collection'>
            <img src={col4}>
            </img>
            <div>
                
            </div>
        </div>
        <div className='collection'>
            <img src={col5}>
            </img>
            <div>
                
            </div>
        </div>
        <div className='collection'>
            <img src={col6}>
            </img>
            <div>
                
            </div>
        </div>
        <div className='collection'>
            <img src={col7}>
            </img>
            <div>
                
            </div>
        </div>
        <div className='collection'>
            <img src={col8}>
            </img>
            <div>
                
            </div>
        </div>

      </div>
    </div>
  )
}
