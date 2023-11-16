import React  from "react";
import './Skill.css';

import R from '../../assets/Skill_Image/react.png';
import Nodejs from '../../assets/Skill_Image/nodejs.png';
import MongoDB from '../../assets/Skill_Image/mongo-db.png';
import Js from '../../assets/Skill_Image/javascript.png';
import Tailwind from '../../assets/Skill_Image/tailwind.png';
import CSS from '../../assets/Skill_Image/css.png';
import HTML from '../../assets/Skill_Image/html.png';
import Figma from '../../assets/Skill_Image/figma.png';
import Bootstrap from '../../assets/Skill_Image/bootstrap.png';

const Skill = ()=>{
    return(
        <div className="skill section" id="skill">
            <h2 className="section_title">Skill</h2>
            <span className="section_subtitle">What I Know</span>

            <div className="skill_container container grid">
                <div className="skill_box">
                    <img src={R} alt="React" className="skill_img" />
                    <img src={Tailwind} alt="Tailwind" className="skill_img"/>
                    <img src={Nodejs} alt="Nodejs" className="skill_img"/>
                    <img src={MongoDB} alt="MongoDB" className="skill_img"/>
   
                   {/*  */} <img src={Bootstrap} alt="Bootstrap" className="skill_img"/>  
                      <img src={Js} alt="JS" className="skill_img"/>
                    <img src={CSS} alt="CSS" className="skill_img"/>
                    <img src={HTML} alt="HTML" className="skill_img"/>
                </div>            
            </div>
        </div>
    )
}
export default Skill;