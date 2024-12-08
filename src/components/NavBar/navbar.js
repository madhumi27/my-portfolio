import React, { useState } from 'react';
import { Link } from 'react-scroll';
import contactimg from '../../assets/contact.png';
import logo from '../../assets/logo.png';
import moblogo from '../../assets/menu.png';
import './navbar.css';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
    <img src={logo} alt="Logo" className='logo'/>
    <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListName'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListName'>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListName'>Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListName'>Clients</Link>
    </div>
    <button className="desktopMenuBtn" onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
    }}>
    <img src={contactimg} alt="" className="desktopMenuImg"/>Contact Me</button>
    
    <img src={moblogo} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
    <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='mobListName' onClick={()=>setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='mobListName' onClick={()=>setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='mobListName' onClick={()=>setShowMenu(false)}>Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='mobListName' onClick={()=>setShowMenu(false)}>Clients</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='mobListName' onClick={()=>setShowMenu(false)}>Contact</Link>
    </div>

    </nav>
  
  )
}

export default Navbar