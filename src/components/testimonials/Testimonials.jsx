import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: AVTR1,
    name: 'Albert Kunal',
    review: 'This online alphabetizer tool can take a list of words separated by spaces, commas, lines, etc and put the words in alphabetical order'
  },
  {
    id: 2,
    image: AVTR2,
    name: 'Stephen Prakash',
    review: 'This online alphabetizer tool can take a list of words separated by spaces, commas, lines, etc and put the words in alphabetical order'
  },
  {
    id: 3,
    image: AVTR3,
    name: 'Akla Mosa',
    review: 'This online alphabetizer tool can take a list of words separated by spaces, commas, lines, etc and put the words in alphabetical order'
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial_container"
      modules={[Pagination]}
      // navigation
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
      {
        data.map(({ id, image, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client_avatar">
                <img src={image} alt="Avatar" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials