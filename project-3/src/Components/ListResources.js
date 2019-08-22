import React from 'react';

class ListResources extends React.Component {

    state = {beers: ''}    
    
    render() {
        return (
                <ul>
                    {this.props.beersList.map(value => (<li key={value.name}>{value.name}</li>))}
                </ul>
        );
    }
}

export default ListResources;