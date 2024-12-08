import React from 'react'
import appdsn from '../../assets/app-design.png'
import uidsn from '../../assets/ui-design.png'
import webdsn from '../../assets/website-design.png'
import './skills.css'
const Skills = () => {
    return (
    <section id='skills'>
        <span className='skillTitle'>What I do?</span>
        <span className='skillDesc'>I design and develop user-friendly web solutions, specializing in backend development with Java and Spring Boot. I also create low-code automation workflows using Power Apps and Power Automate to streamline processes.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={uidsn} alt='uidsn' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Web Development</h2>
                    <p>I design and develop responsive and user-friendly websites using ReactJS, HTML, CSS, and JavaScript. My focus is on delivering intuitive user experiences and seamless interactions.                    </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={webdsn} alt='webdsn' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Low-Code Solutions
                    </h2>
                    <p>I create automation workflows using Power Apps and Power Automate, enabling organizations to streamline processes and boost efficiency.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={appdsn} alt='appdsn' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>App Development</h2>
                    <p>I develop engaging and efficient applications tailored to specific user needs. My projects range from healthcare applications to gamified learning experiences.</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Skills;