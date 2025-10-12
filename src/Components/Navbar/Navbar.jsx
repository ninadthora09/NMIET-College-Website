import React,{useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/MBA_degree.png'
import menu_icon from '../../assets/menu_icon1.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky]= useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ? setSticky(true):setSticky(false);
    })
  },[]);

  const [mobileMenu,setmobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu? setmobileMenu(false):setmobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark_nav': ''}`}>
      <div className='logo'>
        <img src={logo} alt="logo"/>
        <h1>NMIET</h1>
      </div>
      <ul className={mobileMenu?'':'mobile_menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Programs</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Alumni</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className="btn">Contact</Link></li>
      </ul>
      <img src={menu_icon} className="menu_icon" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
