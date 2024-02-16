import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import hero_imae from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <div className='Arrivals'>
          <h5>NEW ARRIVALS ONLY</h5>
        </div>
        <div className='hand-hand-icon'>
          <div className="hand"><p>new</p>
            <img src={hand_icon} alt=''></img>
          </div>
          <p>collection</p>
          <p>for everyone</p>

        </div>

        <div className='latestcollection'><button>latest collection</button></div>
      </div>


      <div className='hero-right'>
        <div className='hero-latest-btn'>

          <img src={hero_imae} alt=''></img>
        </div>
      </div>
    </div>

  )
}

export default Hero