import React from 'react'
import './footer.css'
import {BsLinkedin,BsInstagram,BsGithub,BsDiscord} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer_logo'>Animesh</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
        <a href="https://instagram.com" target="blank"><BsInstagram/></a>
        <a href="https://github.com" target="blank"><BsGithub/></a>
        <a href="https://discordapp.com/users/OptimasPrime#7948/" target="blank"><BsDiscord/></a>
      </div>
       
       <div className="footer_copyright">
        <small>&copy; Animesh. All rights reserved</small>
       </div>
    </footer>
  )
}

export default Footer