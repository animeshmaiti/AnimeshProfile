import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Typewriter from 'typewriter-effect'
import MODE from '../../assets/moon.png'

const Header = () => {
  return (
    <header>
      <div id='home' className="container header_container">
      <div className='mode'><img src={MODE} alt="mode" /></div>
      <Typewriter 
      options={{autoStart:true,
      loop:true,
      delay:40,
      strings:[
        "Hello I'm"
      ]}}/>
      <h6 data-text ="Animesh...">Animesh...</h6>
      {/* <h1>Animesh...</h1> */}
      <h5 className="text-light">Fullstack Devloper</h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img src={ME} alt="me" />
      </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header