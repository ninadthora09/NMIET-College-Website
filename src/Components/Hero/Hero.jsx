import React from 'react'
import './Hero.css'
import arrow from '../../assets/photos/arrow1.jpg'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>"The Best Start to Your Future.Learn Today, Lead Tomorrow."</h1>
        <p>At Campusx, we believe that education is the foundation of a life well-lived. Our mission is built into our core philosophy: to provide you with The Best Start to Your Future.</p>
        <button className='btn'>Explore more <img src={arrow} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero
