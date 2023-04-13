import React, { useEffect } from 'react'
import './Story.css'
import art2 from './act2.jpeg'

export default function Story() {
  const animation = (entries, observer)=>{
    entries.forEach(entry => {
      console.log(entry.target)
      if(entry.isIntersecting){
        entry.target.classList.add('showww')
      }
    })
  }
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
  }
  const observer2 = new IntersectionObserver(animation , options);
  useEffect(()=>{
    const content = document.getElementsByClassName('text')
    for(let i = 0 ; i<content.length ; i++){
      observer2.observe(content[i])
    }
  })
  
  return (
    <div className='story-main'>
    <div className='story-area'>
      <div className='story'>
        <div className='content'>
          <div className='text'>
          In the mysterious land of Felis town, an advanced civilization flourished in secrecy, their technology beyond our wildest imaginations. But while they thrived in isolation, their knowledge and resources caught the attention of outsiders who longed to possess their secrets.
          Felis was an advanced civilization, with technology beyond the wildest imaginations of the outside world. Their technology was not just ahead of its time; it was in a league of its own. The Felines, as the inhabitants of Felis were known, lived in prosperity and wealth, basking in the knowledge of their advanced society. But the were also a secretive people. They knew that if their technology and knowledge were to fall into the wrong hands, it could spell disaster for the world. The Felines feared that outsiders would use their advancements for evil deeds and exploit them for their own benefit.
          </div>
        </div>
        <div className='art'>
          <img src={art2} className='text'>
          </img>
        </div>
      </div>
      <div className='story'>
        <div className='art designtwo'>
          <img src={art2} className='text'>
          </img>
        </div>
        <div className='content design'>
          <div className='text'>
          Despite their fears, the outside world began to learn of Felis' advancements. News of the town's prosperity spread like wildfire, and the greedy and the corrupt were eager to get their hands on the Felines' secrets. They knew that the technology developed by the Felines could bring unimaginable wealth and power.The Felines, ever vigilant, knew they had to protect their knowledge at all costs. They worked tirelessly to keep their secrets safe from the outside world, and they remained hidden away from the rest of civilization.
          </div>
        </div>
      </div>
      <div className='story'>
        <div className='content'>
          <div className='text'>
          However! their efforts were not enough. One of their own, a superior official, became corrupt and was sold for money to an evil outsider. The traitor breached the security of Felis and accessed the most sensitive files and technology scripts. The traitor copied everything they could and made plans to sell it to an evil outsider who craved the power that the advanced knowledge could bring. The Felines were devastated. Their worst fears had become a reality.The Felines knew they had to act fast. They mobilized their most skilled warriors and technology experts to recover their stolen information. It was a race against time, and the stakes were high.
          </div>
        </div>
        <div className='art'>
          <img src={art2} className='text'>
          </img>
        </div>
      </div>
      <div className='story'>
        <div className='art designthree'>
          <img src={art2} className='text'>
          </img>
        </div>
        <div className='content designfour'>
          <div className='text'>
            But fear not, for you have the opportunity to witness this thrilling tale and own a piece of it through the magic of NFTs. Immerse yourself in the world of Felis town and own a unique piece of digital art thatcaptures the essence of this advanced civilization. Join the NFT community and become a part of this exciting story, before it's too late!
          </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}
