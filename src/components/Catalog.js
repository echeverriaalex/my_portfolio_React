import React from 'react';
import { Card } from './Card';
import '../styles/Catalog.css'

export const Catalog =(props)=>{
    return(
        <div className='catalog'>
            {
                props.items.map( item =>{
                    return <Card
                        key = { item.key }
                        img = { item.img }
                        labels = { item.labels }
                        title = { item.title }
                        text = { item.text }
                        link = { item.link }
                    />
                })
            }
        </div>
    )
}