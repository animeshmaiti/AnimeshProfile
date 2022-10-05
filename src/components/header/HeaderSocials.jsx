import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/animesh-maiti-3a2164171/" target="blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/maiti_animesh/" target="blank"><BsInstagram/></a>
        <a href="https://github.com/animeshmaiti" target="blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials