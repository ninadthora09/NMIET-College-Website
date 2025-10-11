import React from 'react'
import './Campus.css'
import gallary1 from '../../assets/photos/gallary-1.jpg'
import gallary2 from '../../assets/photos/gallary-2.jpg'
import gallary3 from '../../assets/photos/gallary-3.jpg'
import gallary4 from '../../assets/photos/gallary-4.jpg'
import arrowbtn from '../../assets/photos/arrow1.jpg'

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallary">
        <img src={gallary1} alt="" />
        <img src={gallary2} alt="" />
        <img src={gallary3} alt="" />
        <img src={gallary4} alt="" />
      </div>
      <button className="btn dark-btn">See more here <img src={arrowbtn} alt=""/></button>
    </div>
  )
}

export default Campus
