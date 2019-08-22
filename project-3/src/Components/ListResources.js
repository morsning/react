import React from 'react';
import axios from 'axios';

class ListResources extends React.Component {

    state = {beers: []}

    componentDidUpdate(prevProps) {
        if (prevProps.searchTerm !== this.props.searchTerm) {
            const getDataFromAPI = () => {
                axios.get(`https://api.punkapi.com/v2/beers?beer_name=${this.props.searchTerm}`)
                .then(res => {
                console.log(res.data);
                this.setState({beers: res.data});
            })
            }
            getDataFromAPI();
        }
    }
    
    render() {

        return (
                <ul>
                    {this.state.beers.map(value => (<li key={value.name}>{value.name}</li>))}
                </ul>
        );
    }
}

export default ListResources;