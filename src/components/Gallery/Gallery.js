import React from 'react'
import './Gallery.css';


const Gallery = () => {
  return (
    <div>
    <section id='gallery'> 
        <h1 className='gallery-heading'>Gallery</h1>
        <div className="gallery">
        
            
            <div className="box row-2" style={{ backgroundImage : `url(${require("../../assets/14.PNG")}`}}></div>
            <div className="box" style={{ backgroundImage : `url(${require("../../assets/3.JPG")}`}}></div>
            <div className="box col-2" style={{ backgroundImage : `url(${require("../../assets/7.JPEG")}`}}></div>
            <div className="box col-2" style={{ backgroundImage : `url(${require("../../assets/12.jpg")}`}}></div>
            
            <div className="box row-2" style={{ backgroundImage : `url(${require("../../assets/11.jpg")}`}}></div>
            <div className="box col-2" style={{ backgroundImage : `url(${require("../../assets/5.JPG")}`}}></div>
            <div className="box row-2" style={{ backgroundImage : `url(${require("../../assets/13.jpg")}`}}></div>
            <div className="box" style={{ backgroundImage : `url(${require("../../assets/2.jpg")}`}}></div>
            <div className="box" style={{ backgroundImage : `url(${require("../../assets/10.jpg")}`}}></div>

            <div className="box row-2" style={{ backgroundImage : `url(${require("../../assets/9.jpg")}`}}></div>
            <div className="box" style={{ backgroundImage : `url(${require("../../assets/6.JPG")}`}}></div>
            <div className="box col-2" style={{ backgroundImage : `url(${require("../../assets/1.jpg")}`}}></div>
            
            
        </div>
    </section>
    
    </div>
  )
}

export default Gallery