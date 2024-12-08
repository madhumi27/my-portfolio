import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import i6 from '../../assets/css-3.png';
import fb from '../../assets/facebook-icon.png';
import i5 from '../../assets/html-5.png';
import ins from '../../assets/instagram.png';
import i1 from '../../assets/java.png';
import i4 from '../../assets/mysql.png';
import i2 from '../../assets/react.png';
import i3 from '../../assets/sb.png';
import tw from '../../assets/twitter.png';
import yt from '../../assets/youtube.png';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs.sendForm('service_jya6xfs', 'template_zk2rot9', form.current, {publicKey: 'cQTeNILm1r8JW-xyr'})
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent');
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Skills</h1>
            <p className='clientDesc'>
            I have honed my technical expertise in diverse areas, including backend development, low-code platforms, and web technologies. Below are some of the key tools and technologies I specialize in:
            </p>
            <div className='clientImgs'>
              <img src={i1} alt='Java' title='Java' className='clientImg'></img>
              <img src={i2} alt='ReactJS' title='ReactJS' className='clientImg'></img>
              <img src={i3} alt='Springboot' title='SpringBoot' className='clientImg'></img>
              <img src={i4} alt='MySQL' title='MySQL' className='clientImg'></img>
              <img src={i5} alt='HTML' title='HTML' className='clientImg'></img>
              <img src={i6} alt='CSS' title='CSS' className='clientImg'></img>
            </div>
        </div>
        <div id='contact'>
            <h2 className='contactPageTitle'>Contact Me</h2>
            <span className='contactDesc'>Please fill out the form below to discuss any work oppurtunity</span>
            <form ref={form} className='contactForm' onSubmit={sendEmail}>
                <input type='text' name='from_name' className='name' placeholder='Your Name'/>
                <input type='email' name='from_email' className='email' placeholder='Your Email'/>
                <textarea className="msg"  name='message' rows="5" placeholder='Your Message'/>
                <button className='submitBtn' type='submit' value='Send'>Submit</button>
                <div className='links'>
                    <img src={ins} alt=''className='link'></img>
                    <img src={yt} alt=''className='link'></img>
                    <img src={fb} alt=''className='link'></img>
                    <img src={tw} alt=''className='link'></img>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact