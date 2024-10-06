import React from 'react'
import './Skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <div>
    <section id="skills">
        <div className="container">
            <div className="skills-heading">
                <h1>What I do</h1>
                <p>Lorem ipsum dolor sit  maiores labore quo error, eius, ipsam ratione nostrum inventore totam laboriosam placeat repudiandae itaque explicabo reprehenderit nesciunt exercitationem nihil voluptatem molestias ab impedit consectetur veniam natus. Ut magnam quidem natus, blanditiis deleniti eaque aliquam quasi saepe sunt a, provident illum accusantium architecto labore culpa earum cumque aperiam dolorem ad doloribus sequi pariatur, similique officia! Distinctio, animi. In facere nam harum explicabo ipsa.</p>
            </div>
            <div className="skill-items flex">
                <div className="skill-card">
                    <img src={UIDesign} alt="" />
                    <h3>UI/UX Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, similique?</p>
                </div>
                <div className="skill-card">
                    <img src={AppDesign} alt="" />
                    <h3>App Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, similique?</p>
                </div>
                <div className="skill-card">
                    <img src={WebDesign} alt="" />
                    <h3>Web Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, similique?</p>
                </div>
            </div>
        </div>
        
    </section>
    
    </div>
  )
}

export default Skills;