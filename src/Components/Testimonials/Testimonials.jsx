import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/photos/next-btn.png'
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
                            <h3>Limbron James</h3>
                            <span>CampusX, India</span> 
                        </div>
                    </div>
                    <p>Our college offers the perfect blend of academic rigor and personal growth. From top-notch facilities to a supportive campus environment, it empowers every student to explore, learn, and achieve their goals confidently.</p>
                </div>
            </li>
            <li>
                <div className="slider">
                    <div className="user-info">
                        <img src={user_info2} alt=""/>
                        <div>
                            <h3>Limbron James2</h3>
                            <span>CampusX, India</span>
                        </div>
                    </div>
                    <p>We focus on shaping future-ready professionals through hands-on training, industry collaborations, and strong placement support. Choosing our college means choosing a platform where your skills meet endless opportunities.</p>
                </div>
            </li>
            <li>
                <div className="slider">
                    <div className="user-info">
                        <img src={user_info3} alt=""/>
                        <div>
                            <h3>Limbron James3</h3>
                            <span>CampusX, India</span>
                        </div>
                    </div>
                    <p>Choosing our college means joining an institution that values excellence, innovation, and holistic development. With experienced faculty, modern infrastructure, and a focus on practical learning, we prepare students to thrive in real-world challenges.</p>
                </div>
            </li>
            <li>
                <div className="slider">
                    <div className="user-info">
                        <img src={user_info4} alt=""/>
                        <div>
                            <h3>Limbron James3</h3>
                            <span>CampusX, India</span>
                        </div>
                    </div>
                    <p>We believe that quality education builds the foundation for success. Our college combines academic excellence with modern teaching methods to ensure students gain both knowledge and practical skills that matter in today’s world.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
