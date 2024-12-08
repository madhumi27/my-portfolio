import React from 'react'
import { Link } from 'react-scroll'
import btnimg from '../../assets/hireme.png'
import myimg from '../../assets/image.png'
// import myimg from '../../assets/image-1.png'

import './intro.css'
const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='intoText'>
                    I'm <span className='introName'>Madhumitha</span>
                    <br></br>
                    Computer Science Engineer
            </span>
            <p className='introPara'>A Computer Science enthusiast passionate about crafting innovative web solutions.
            <br/> With expertise in backend development and creative problem-solving,
            <br/>I turn ideas into impactful digital experiences. Explore my work!"</p>
            <Link><button className='hirebtn'><img src={btnimg} alt='hire image' className='btnimg'></img> Hire Me</button></Link>
            </div>
        <img src={myimg} alt='profile' className='bg'></img>
    </section>
  )
}

export default Intro