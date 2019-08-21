import React from 'react';

export const ListResources = (props) => {

    return (
            <ul>
                {props.beersList.map(value => (<li>{value.name}</li>))}
            </ul>
    )
}