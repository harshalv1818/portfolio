import React, {useRef}from 'react';
import './ContactMe.css';
import FacebookIcon from '../../assets/facebook-icon.png'
import YoutubeIcon from '../../assets/youtube.png'
import TwitterIcon from '../../assets/twitter.png'
import InstagramIcon from '../../assets/instagram.png'

import emailjs from '@emailjs/browser';

const ContactMe = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b7ckwc6', 'template_dbpk991', form.current, 'Qba_5_fQStP5T_BC5')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    
      <section id='contact'>
        <div className="container contact-me-section">
        <h1>Contact Me</h1>
        <h3>Please fill out the below form to discuss work opportunities.</h3>

        <form ref={form} onSubmit={sendEmail} className='contact-form flex' >
          <input type="text" className='name' placeholder='Your Name' name='sender_name'/>
          <input type="email" className='email' placeholder='Your Email' name='sender_email'/>
          <textarea name="message" className='message' rows="5" placeholder='Your Message...'></textarea>

          <button type="submit" value="Send" className='submit-btn'>Submit</button>
          
          
        </form>
        <div className="social-links flex">
            <img src={FacebookIcon} alt="fb" className="link" />
            <img src={YoutubeIcon} alt="yt" className="link" />
            <img src={TwitterIcon} alt="tw" className="link" />
            <img src={InstagramIcon} alt="ig" className="link" />
          </div>
      
      </div>
      </section>
      
  )
}

export default ContactMe;