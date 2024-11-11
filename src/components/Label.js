import React from "react";
import '../styles/Label.css'

export const Label = ( { text } ) =>{
    return(
        <span className={ text.toLowerCase() }> {text} </span>
    )
}