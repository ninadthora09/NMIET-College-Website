import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import { useState } from 'react'

const App = () => {
  
  const [playState, setPlayState]= useState(false);

  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subTitle='Our programs' title='WHAT WE OFFER'/>
          <Program/>
          <About setPlayState={setPlayState}/>
          <Title subTitle='Gallery' title='CAMPUS PHOTOS'/>
          <Campus/>
          <Title subTitle='Alumni' title="WHAT OUR STUDENT's SAY "/>
          <Testimonials/>
          <Title subTitle='Contact us' title="Get in Touch"/>
          <Contact/>
          <Footer/>
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
