import React from "react";
import '../styles/MeetMe.css'
import { NetworkContainer } from "./NetworkContainer";

export const MeetMe = ({img, name, description}) =>{
    return(
        <section id="meetme">
            <div className="content">
                <img src={img} alt="foto de perfil"/>            
                <div className="description-container">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <NetworkContainer />
        </section>
    )
}