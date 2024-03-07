import React, { useState, useEffect } from 'react'
import './navbar.css'
import Vector from '/src/IMG/Vector.png'
import {Link} from 'react-scroll';


const Navbar = () => {

  const[sticky, setSticky] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 30 ? setSticky(true) : setSticky(false)
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <i className="fa-solid fa-dove"></i>
      <ul className={mobileMenu?'': 'hide-mobile-menu'}>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
          <li><Link to='campus' smooth={true} offset={-260} duration={500}>Farm</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500} className="btn">Contact Us</Link></li>
      </ul>
      <img src={Vector} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
