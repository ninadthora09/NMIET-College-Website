import React from 'react'
import './Campus.css'
import gallary1 from '../../assets/gallary-1.jpg'
import gallary2 from '../../assets/gallary-2.jpg'
import gallary3 from '../../assets/gallary-3.jpg'
import gallary4 from '../../assets/gallary-4.jpg'
import arrowbtn from '../../assets/arrow1.jpg'

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallary">
        <img src={gallary1} alt="" />
        <img src={gallary2} alt="" />
        <img src={gallary3} alt="" />
        <img src={gallary4} alt="" />
      </div>

      <a 
        href="https://www.nmiet.edu.in/media/gallery.php" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button className="btn dark-btn">
          See more here <img src={arrowbtn} alt=""/>
        </button>
      </a>
    </div>
  )
}

export default Campus
