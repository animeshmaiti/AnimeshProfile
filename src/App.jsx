import React from 'react'
import { useState, useEffect } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import Projects from './components/projects/Projects'
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, [])

  return (
    <div>
      {
        loading ?
        <div className='Loading'>
        <ClimbingBoxLoader
        size={30}
        color={"#36d7b7"}
        loading = {loading}
        />
        </div>
      :
      <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      </div>
}
    </div>
  )
}

export default App