import React from "react";
import '../styles/Network.css'

export const Network = ({link, img, description}) =>{
    return(
        <a href={link} className="icon-network">
            <img className="img-network" src={img} alt={description}/>
        </a>
    )
}