import React from 'react';
import '../styles/Section.css'

export const Section = ({id, title, component}) => {
    return(
        <section id= { id }>
            <h2>{title}</h2>
            {component}
        </section>
    )
}