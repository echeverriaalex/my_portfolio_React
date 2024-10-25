import React from 'react';
import '../styles/ContactItem.css'

export const ContactItem = ({link, img, name, text})=>{
    return(
        <div className='item-contact'>
            <a href={link}>
                <img src={img} alt='name'/>
                <p>{text}</p>
            </a>
        </div>
    );
};