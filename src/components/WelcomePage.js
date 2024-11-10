import React from "react";
import '../styles/WelcomePage.css';
import foto from '../me2.jpg';

export const WelcomePage = () =>{
    return(
        <div className="welcome-container">
            <div className="content-container">
                <img className="gif" src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGExNDBxa28xc3F3c3hyYXRyd2ZpcWNpeHh0OXQyZ3NwaWdncWQ2MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lnmWcQwdUzrigDDk6s/giphy.gif' alt=""/>
                <img className="me" src={foto} alt="Me"/>
                <div className="text-container">
                    <h1>Soy <span>Alex</span> !</h1>
                    <p className="developer">Desarrollador Full-Stack</p>
                </div>
                
            </div>
            <a className="button-welcome" href="#meetme">Conóceme</a>
        </div>
    )
}