import React from 'react'
import './About.css'
import about_img from '../../assets/photos/about_img.jpg'
import paly_icon from '../../assets/photos/play_button1.jpg'

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'></img>
        <img src={paly_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}></img>
      </div>
      <div className="about-right">
        <h3>ABOUT COLLEGE</h3>
        <h2>Building Tomorrow's Leaders Today</h2>
        <p>[Your College Name] is a premier, private research university renowned for its commitment to interdisciplinary innovation and student-centered learning. Nestled on a [e.g., historic, modern, sprawling] campus in [City/Region], we provide an exceptional academic environment that encourages intellectual exploration and real-world application. Our curriculum is built on a foundation of [e.g., liberal arts, STEM focus, ethical leadership], featuring small class sizes and a 5:1 student-to-faculty rati</p>
        <p>We are particularly known for our highly-ranked programs in [Top Program 1] and [Top Program 2], which offer unique opportunities for undergraduate research and mandatory industry placements. Beyond the classroom, our community is vibrant, supporting over 100 student clubs and [Mention a unique campus feature, e.g., a nationally-recognized Debate Team, an on-campus innovation lab].</p>
        <p>Graduates of [Your College Name] are sought after by top employers globally, equipped not just with knowledge, but with the critical thinking and problem-solving skills needed to lead in a changing world.</p>
      </div>
    </div>
  )
}

export default About
