import React from 'react';

function CharacterCard(props) {
    return (
    <div>
        <h3>{props.name}</h3>
        <img width="300px" src={props.img} alt={props.name}/>
    </div>
    )
}

export default CharacterCard