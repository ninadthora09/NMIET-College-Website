import React from 'react'
import './Program.css'
import program_1 from '../../assets/Program-1.jpg'
import program_2 from '../../assets/Program-2.jpg'
import program_3 from '../../assets/Program-3.jpg'
import program_icon_1 from '../../assets/master_degree.png'
import program_icon_2 from '../../assets/master_degree1.png'
import program_icon_3 from '../../assets/Post_grad_degree.png'

const Program = () => {
  return (
    <div className="programs" >
      <div className="program">
        <img src={program_1} alt=""/>
        <div className="caption">
            <img src={program_icon_1} alt=""></img>
            <p>Graduation Degree</p>
            <p>At NMIET, we offer undergraduate programs leading to Bachelor of Engineering (B.E.) degrees in various specializations, preparing students for successful careers in the field of engineering.</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt=""/>
         <div className="caption">
            <img src={program_icon_2} alt=""></img>
            <p>Master Degree</p>
            <p>At NMIET, we offer postgraduate programs leading to Master of Technology (M.Tech) degrees in advanced engineering specializations, equipping students with the skills and knowledge to excel in research, innovation, and leadership roles in the engineering industry.</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt=""/>
         <div className="caption">
            <img src={program_icon_3} alt=""></img>
            <p>Post Graduation</p>
            <p>At NMIET, we offer postgraduate programs such as Master of Science (M.Sc) and Master of Business Administration (MBA), designed to provide advanced knowledge and professional skills, preparing students for leadership roles and specialized careers in their chosen fields.</p>
        </div>
      </div>
    </div>
  )
}

export default Program
