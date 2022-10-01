import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
        <a href="https://instagram.com" target="blank"><BsInstagram/></a>
        <a href="https://github.com" target="blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials