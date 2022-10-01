import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Desinge</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>As a student, I get free time sometimes and I do some exciting things to pass that time</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>As a student, I get free time sometimes and I do some exciting things to pass that time</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>As a student, I get free time sometimes and I do some exciting things to pass that time</p>
            </li>
          </ul>
        </article>
        {/* End of UI/Ux desinge */}
        <article className='service'>
          <div className="service_head">
            <h3>Web Dvelopment</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>As a student, I get free time sometimes and I do some exciting things to pass that time</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>As a student, I get free time sometimes and I do some exciting things to pass that time</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>As a student, I get free time sometimes and I do some exciting things to pass that time</p>
            </li>
          </ul>
        </article>
        {/* End of web development */}
        <article className='service'>
          <div className="service_head">
            <h3>Content creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>As a student, I get free time sometimes and I do some exciting things to pass that time</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>As a student, I get free time sometimes and I do some exciting things to pass that time</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>As a student, I get free time sometimes and I do some exciting things to pass that time</p>
            </li>
          </ul>
        </article>
        {/* End of content creation */}
      </div>
    </section>
  )
}

export default Services