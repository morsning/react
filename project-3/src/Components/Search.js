import React from 'react';

class Search extends React.Component {
    
    somethingElse = event => {
        console.log(event.target.value)
    }

    render() {
        
        return (
            <div>
                <form>
                    <input type="text" onChange={this.somethingElse}/>
                </form>
            </div>
        );
    }
}

export default Search;