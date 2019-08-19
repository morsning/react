import React from 'react';

class Search extends React.Component {
    
    state = {searchTerm: ''}
    
    render() {
        
        return (
            <div>
                <p>{this.state.searchTerm}</p>
                <form>
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