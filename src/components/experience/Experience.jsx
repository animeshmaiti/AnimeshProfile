import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My experience</h2>
      <div className="container experience_container">
        <div className="experience_fronted">
          <h3>Frontend development</h3>
          <div className="experience_content">
            <article className="experinece_details">
              <BsPatchCheckFill className='experinece_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='lext-light'>Experienced</small>
              </div>
            </article>
            <article className="experinece_details">
              <BsPatchCheckFill className='experinece_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='lext-light'>Experienced</small>
              </div>
            </article>
            <article className="experinece_details">
              <BsPatchCheckFill className='experinece_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='lext-light'>Experienced</small>
              </div>
            </article>
            <article className="experinece_details">
              <BsPatchCheckFill className='experinece_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='lext-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* ====== End of Frontend======= */}
        <div className="experience_backend">
          <h3>Frontend development</h3>
          <div className="experience_content">
            <article className="experinece_details">
              <BsPatchCheckFill className='experinece_details-icon'/>
              <div>
                <h4>Node Js</h4>
                <small className='lext-light'>Experienced</small>
              </div>
            </article>
            <article className="experinece_details">
              <BsPatchCheckFill className='experinece_details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='lext-light'>Experienced</small>
              </div>
            </article>
            
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience