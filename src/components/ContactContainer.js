import React from 'react';
import { ContactItem } from './ContactItem';
import '../styles/ContactContainer.css';

export const ContactContainer = ()=>{
    const socialMedia = [
        {
            link: 'https://www.linkedin.com/in/alexnahuelecheverria/',
            img: 'https://www.svgrepo.com/show/110195/linkedin.svg',
            name: 'LinkedIn', 
            text: 'Alex Nahuel Echeverria'
        },
        {
            link: 'https://wa.me/+5492236684653',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/2048px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png',
            name: 'WhatsApp', 
            text: '+54 223-668 4653'
        },
        {
            link: 'https://www.instagram.com/alexx_echev/',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
            name: 'Instagram', 
            text: 'alexx_echev'
        },
        {
            link: 'https://www.facebook.com/AlexNahuelEcheverriaa/',
            img: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg',
            name: 'Facebook', 
            text: 'Alex Nahuel Echeverria'
        },
        {
            link: 'mailto:aleex.naahuel@outlook.com',
            img: 'https://cdn1.iconfinder.com/data/icons/application-file-formats/128/microsoft-outlook-512.png',
            name: 'E-mail', 
            text: 'aleex.naahuel@outlook.com'
        },
    ]

    return(
        <div className='contact-container' id='contact'>
            {
                socialMedia.map((social) =>
                    <ContactItem 
                        key={ social.link }
                        link={social.link}
                        img={social.img}
                        name={social.name}
                        text={social.text}
                    />
                )
            }
        </div>
    );
};