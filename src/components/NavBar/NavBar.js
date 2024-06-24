import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../../assets/mylogo.png';
import ContactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'

const NavBar = () => {
    const [showHamBurMenu, setshowHamBurMenu] = useState(false)
    return (
        <nav>
            <div className=" container main-nav flex">
                <div  className="company-logo">
                    <img src={Logo} alt="company-logo" />
                </div>
                <div className="nav-links flex">

                    <Link activeClass='active' to='main' spy={true} smooth={true}  duration={500}className="hover-links nav-items">Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true}  duration={500} className="hover-links nav-items">About</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} duration={500} className="hover-links nav-items">Portfolio</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="hover-links nav-items">Blogs</Link>
                    <Link activeClass='active' to='gallery' spy={true} smooth={true}  duration={500} className="hover-links nav-items">Gallery</Link>


                </div>
                <div className="contact-us flex" onClick={()=>{
                    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
                }}>
                    <img src={ContactImg} alt="contact-img" className="contactImg" />
                    <div>Contact Me</div>
                </div>

                
                <img className='ham-image' src={menu} alt="hamburger-menu" onClick={()=>{setshowHamBurMenu(!showHamBurMenu)}} />
                <div className="hamburMenu flex" style={{display:showHamBurMenu? 'flex':'none'}}>
                    <Link activeClass='active' to='main' spy={true} smooth={true}  duration={500}className="hambur-links" onClick={()=>{setshowHamBurMenu(false)}} >Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true}  duration={500} className="hambur-links" onClick={()=>{setshowHamBurMenu(false)}} >About</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} duration={500} className="hambur-links" onClick={()=>{setshowHamBurMenu(false)}} >Portfolio</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="hambur-links" onClick={()=>{setshowHamBurMenu(false)}} >Blogs</Link>
                    <Link activeClass='active' to='gallery' spy={true} smooth={true}  duration={500} className="hambur-links" onClick={()=>{setshowHamBurMenu(false)}} >Gallery</Link>
                    <Link activeClass='active' to='contact' spy={true} smooth={true}  duration={500} className="hambur-links" onClick={()=>{setshowHamBurMenu(false)}} >Contact Me</Link>
                </div>
            </div>

        </nav>
    )
}

export default NavBar

