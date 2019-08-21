import React from 'react';

class Search extends React.Component {
    
    state = {searchTerm: ''}
    
    onFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.searchTerm);
        this.props.onSearch(this.state.searchTerm)
    }

    render() {
        
        return (
            <div>
                <p>Try the search terms king or punk and press enter</p>
                <form onSubmit={event => this.onFormSubmit(event)}>
                    <input 
                        type="text" 
                        value={this.state.searchTerm}
                        onChange={e => this.setState({searchTerm: e.target.value})}
                    />
                </form>
            </div>
        );
    }
}

export default Search;