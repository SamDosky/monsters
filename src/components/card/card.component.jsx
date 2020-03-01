import React from 'react';
import './card.component.css'

export  const Card = (props) => (
    <div className='card-container'>
        <img alt="monster" src={`http://robohash.org/${props.monster.id}`}></img>
        <h1> {props.monster.name} </h1>
    </div>
)