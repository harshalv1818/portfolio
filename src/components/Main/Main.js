import React from 'react';
import myImage from '../../assets/image.png';
import './Main.css';

const Main = () => {
  return (
    <header id='main'> 
        <div className="container header-section flex">
            <div className="header-left flex">
                <h2>Hi ,</h2>
                <h1>I am <span id="name">Harshal .</span><br/>I love Web Development !</h1>
                <p>I am a skilled and pasionate web designer with experience in creating visually appealing and user-friendly websites. </p>
                <button className="primary-button hire-me-button">Know more about me ...</button>
            </div>
            <div className="header-right">
                <img src={myImage} alt="myImage" className='my-image' />
            </div>
        </div>

        
    </header>
  )
}

export default Main