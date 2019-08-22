import React, {useState, useEffect } from 'react';
import axios from 'axios';

const ListResources = (props) => {

    const [beers, setBeers] = useState([]);

    const getDataFromAPI = () => {
        axios.get(`https://api.punkapi.com/v2/beers?beer_name=${props.searchTerm}`)
        .then(res => {
            console.log(res.data);
            setBeers(res.data);
        })
    }

    useEffect(
        () => {
            getDataFromAPI();
        },
        [props.searchTerm]
    );
        
    return (
            <ul>
                {beers.map(value => (<li key={value.name}>{value.name}</li>))}
            </ul>
    );
}

export default ListResources;