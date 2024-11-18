import React from "react";
import { Label } from "./Label";
import '../styles/Card.css';

export const Card = ({img, labels, title, text, link}) =>{
    return(
        <div className="card">
            <img src={img} alt="Project" />
            <div className="labels-container">
                {
                    labels.map( label =>{
                        return <Label
                            key= { label }
                            text = { label }
                        />
                    })
                }
            </div>
            <h2> { title } </h2>
            <p> { text } </p>
            <a className="link" href={link} target="_blank" rel="noreferrer"> Ver proyecto </a>
        </div>
    )
}