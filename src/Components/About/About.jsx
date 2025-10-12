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
        <p>Nutan Maharashtra Institute of Engineering and Technology (NMIET) is a premier private engineering college renowned for its commitment to interdisciplinary innovation and student-centered learning. Nestled on a modern, sprawling campus in Talegaon Dabhade, Pune, we provide an exceptional academic environment that encourages intellectual exploration and real-world application. Our curriculum is built on a foundation of engineering excellence and practical skills, featuring small class sizes and a supportive student-to-faculty ratio.</p>
        <p>We are particularly known for our highly-ranked programs in Computer Engineering and Information Technology, which offer unique opportunities for undergraduate research, hands-on projects, and mandatory industry internships. Beyond the classroom, our community is vibrant, supporting over 100 student clubs and an on-campus innovation lab that fosters creativity and entrepreneurship.</p>
        <p>Graduates of NMIET are sought after by top employers nationally and internationally, equipped not just with technical knowledge, but with the critical thinking, problem-solving, and leadership skills needed to excel in a rapidly changing world.</p>
      </div>
    </div>
  )
}

export default About
