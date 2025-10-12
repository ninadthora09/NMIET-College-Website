import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/photos/next-btn1.png'
import back_icon from '../../assets/photos/back-btn1.png'
import user_info1 from '../../assets/photos/user_info1.jpg'
import user_info2 from '../../assets/photos/user_info2.jpg'
import user_info3 from '../../assets/photos/user_info3.jpg'
import user_info4 from '../../assets/photos/user_info4.jpg'

const Testimonials = () => {

       const slider= useRef();
       let tx=0;

    const slideForward= ()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform= `translateX(${tx}%)`
    }
    const slideBackward= ()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform= `translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} className="next-btn" onClick={slideForward}/>
      <img src={back_icon} className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slider">
                    <div className="user-info">
                        <img src={user_info1} alt=""/>
                        <div>
                            <h3>Ashitosh Wagh</h3>
                            <span>Accenture</span> 
                        </div>
                    </div>
                    <p>"NMIET provided me with excellent learning and hands-on experience. The faculty were supportive, and the projects and internships prepared me well for my career." – Alumni</p>
                </div>
            </li>
            <li>
                <div className="slider">
                    <div className="user-info">
                        <img src={user_info2} alt=""/>
                        <div>
                            <h3>Rahul Rajput</h3>
                            <span>Wipro</span>
                        </div>
                    </div>
                    <p>"My time at NMIET was invaluable. The campus environment, practical projects, and guidance from faculty helped me grow both academically and professionally." – Alumni</p>
                </div>
            </li>
            <li>
                <div className="slider">
                    <div className="user-info">
                        <img src={user_info3} alt=""/>
                        <div>
                            <h3>Sherwari wagh</h3>
                            <span>Amazon</span>
                        </div>
                    </div>
                    <p>"NMIET gave me the skills and confidence to excel in my field. The hands-on learning and supportive faculty made all the difference." – Alumni</p>
                </div>
            </li>
            <li>
                <div className="slider">
                    <div className="user-info">
                        <img src={user_info4} alt=""/>
                        <div>
                            <h3>Rani Mishra</h3>
                            <span>Myntra</span>
                        </div>
                    </div>
                    <p>"Studying at NMIET was an amazing experience. The practical projects and mentorship from faculty prepared me well for real-world challenges." – Alumni</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
