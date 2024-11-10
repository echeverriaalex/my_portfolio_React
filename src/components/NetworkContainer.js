import React from "react";
import '../styles/NetworkContainer.css'
import { Network } from "./Network";


export const NetworkContainer = () =>{

    const socialMedia = [
        {
            link: 'https://www.linkedin.com/in/alexnahuelecheverria/',
            img: 'https://www.svgrepo.com/show/110195/linkedin.svg',
            description: 'LinkedIn',
        },
        {
            link: 'https://wa.me/+5492236684653',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/2048px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png',
            description: 'WhatsApp',
        },
        {
            link: 'https://www.instagram.com/alexx_echev/',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
            description: 'Instagram',
        },
        {
            link: 'https://www.facebook.com/AlexNahuelEcheverriaa/',
            img: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg',
            description: 'Facebook',
        },
        {
            link: 'mailto:aleex.naahuel@outlook.com',
            img: 'https://cdn1.iconfinder.com/data/icons/application-file-formats/128/microsoft-outlook-512.png',
            description: 'E-mail', 
        },
    ]


    return(
        <div className="network-container">
            {
                socialMedia.map((social) =>
                    <Network 
                        link={social.link}
                        img={social.img}
                        name={social.name}
                        text={social.text}
                    />
                )
            }
        </div>
    )
}