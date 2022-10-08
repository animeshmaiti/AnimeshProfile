import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
// import IMG6 from '../../assets/portfolio6.jpg'
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Tic Tac Toe',
    github: 'https://github.com/animeshmaiti/tic-tac-toe.git',
    demo: 'https://animeshmaiti.github.io/tic-tac-toe/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Analog clock',
    github: 'https://github.com/animeshmaiti/analog-clock.git',
    demo: 'https://animeshmaiti.github.io/analog-clock/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Moving Lambo Animation',
    github: 'https://github.com/animeshmaiti/moving-lambo.git',
    demo: 'https://animeshmaiti.github.io/moving-lambo/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'chrome-dino-game',
    github: 'https://github.com/animeshmaiti/chrome-dino-game.git',
    demo: 'https://animeshmaiti.github.io/chrome-dino-game/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'coding-template',
    github: 'https://github.com/animeshmaiti/cheatSheet-coding-temp.git',
    demo: 'https://animeshmaiti.github.io/cheatSheet-coding-temp/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt='' />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='animeshmaiti'>Github</a>
                  <a href={demo} className='btn btn-primary' target='amake08'>Play</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio