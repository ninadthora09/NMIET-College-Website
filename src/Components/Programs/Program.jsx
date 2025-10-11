import React from 'react'
import './Program.css'
import program_1 from '../../assets/photos/Program-1.jpg'
import program_2 from '../../assets/photos/Program-2.jpg'
import program_3 from '../../assets/photos/Program-3.jpg'
import program_icon_1 from '../../assets/photos/master_degree.png'
import program_icon_2 from '../../assets/photos/master_degree1.png'
import program_icon_3 from '../../assets/photos/Post_grad_degree.png'

const Program = () => {
  return (
    <div className="programs" >
      <div className="program">
        <img src={program_1} alt=""/>
        <div className="caption">
            <img src={program_icon_1} alt=""></img>
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt=""/>
         <div className="caption">
            <img src={program_icon_2} alt=""></img>
            <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt=""/>
         <div className="caption">
            <img src={program_icon_3} alt=""></img>
            <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Program
