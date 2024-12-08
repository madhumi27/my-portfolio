import React from 'react'
import p1 from '../../assets/portfolio-1.png'
import p2 from '../../assets/portfolio-2.png'
import p3 from '../../assets/portfolio-3.png'
import p4 from '../../assets/portfolio-4.png'
import p5 from '../../assets/portfolio-5.png'
import p6 from '../../assets/portfolio-6.png'
import './worksold.css'
const Worksold = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Projects</h2>
        <span className='worksDesc'>I take pride in paying attention to smallest details and works</span>
        <div className='worksImgs'>
        
            <img src={p1} alt='p1' className='worksimg'></img>

            <img src={p2} alt='p2' className='worksimg'></img>
            <img src={p3} alt='p3' className='worksimg'></img>
            <img src={p4} alt='p4' className='worksimg'></img>
            <img src={p5} alt='p5' className='worksimg'></img>
            <img src={p6} alt='p6' className='worksimg'></img>
        
        </div>
    </section>
  )
}

export default Worksold