import React from "react";
import '../styles/Skill.css'

export const Skill = ({img, text}) =>{
    return(
        <div className="skill">
            <div className="image-container">
                <img src={img} alt="skill" />
            </div>
            <p>{text}</p>
        </div>
    )
}