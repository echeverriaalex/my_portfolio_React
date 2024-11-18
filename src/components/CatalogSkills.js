import React from "react";
import { Card } from "./Card";
import { Skill } from "./Skill";

export const CatalogSkills = () =>{

    const skillList = [
        {
            name: 'Angular',
            img: 'https://img.icons8.com/?size=100&id=dSnah6CSCxRG&format=png&color=000000'
        },
        {
            name: 'React',
            img: 'https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000'
        },
        {
            name: 'NodeJS',
            img: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000'
        },
        {
            name: 'PHP',
            img: 'https://img.icons8.com/?size=100&id=JybIpZjjXT0F&format=png&color=000000'
        },
        {
            name: 'MySQL',
            img: 'https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000'
        },
        {
            name: 'PostgreSQL',
            img: 'https://icons8.com/icon/38561/postgresql'
        },
        {
            name: 'MongoDB',
            img: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000'
        },
        {
            name: 'Git',
            img: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000'
        },
        {
            name: 'GitHub',
            img: 'https://img.icons8.com/?size=100&id=12599&format=png&color=000000'
        },
        {
            name: '',
            img: ''
        },
        {
            name: '',
            img: ''
        },
        {
            name: '',
            img: ''
        },
        {
            name: '',
            img: ''
        },
    ]



    return (
        <div className="catalog-skills">
            {
                skillList.map(skill =>
                    <Skill 
                        img = { skill.img }
                        text = { skill.name }
                    />
                )
            }
        </div>
    )
}