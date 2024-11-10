import React from "react";
import { Label } from "./Label";
import '../styles/Card.css';

export const Card = ({img, labels, title, text  }) =>{
    return(
        <div className="card">
            <img src={img} alt="Project" />

            <div className="labels-container">
                {
                    labels.map( label =>{
                        return <Label  
                            text = { label }
                        />
                    })
                }
            </div>

            <h2> { title } </h2>

            <p> { text } </p>

        </div>
    )
}