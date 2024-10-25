import React from 'react';
import '../styles/Section.css'

export const Section = ({title, component}) => {
    return(
        <section>
            <h2>{title}</h2>
            {component}
        </section>
    )
}