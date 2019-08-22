import React from 'react';

export const ListResources = (props) => {

    return (
            <ul>
                {props.beersList.map(value => (<li key={value.name}>{value.name}</li>))}
            </ul>
    )
}