import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow1.jpg'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h2>'Nutan Maharashtra Institute Of Engineering and Technology'</h2><br></br>
        <h1 className="fade-slide-heading">"The Best Start to Your Future. Learn Today, Lead Tomorrow."</h1>
        <p>At PCET's NMIET, we believe education is the foundation of a successful life, and our mission is to give you the best start to your future.</p><br></br>
         <a 
        href="https://www.nmiet.edu.in/" 
        target="_blank" 
        rel="noopener noreferrer"
        >
        <button className='btn'>Explore more <img src={arrow} alt=""/></button>
        </a>
      </div>
    </div>
  )
}

export default Hero
