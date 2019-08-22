import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Search from './Search'
import { Nav } from './Nav'
import ListResources from './ListResources';
import { Home } from './Home'
import { About } from './About'

class App extends React.Component {
    state = {
        categorySelected : 0,
        selectedBeerName : '',
        beers: [],
        searchTerm: 'punk'
    }
    
    onCategoryChange = selectedCat => {
        console.log("selected category: " + selectedCat)
        this.setState({
            categorySelected : selectedCat
        })
    }

    updateSearchTerm = queryString => {
        this.setState({searchTerm: queryString});
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Nav selectedCat={this.state.categorySelected} onSelect={this.onCategoryChange}/>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/search" render={() => <Search onNameSelect={this.onBeerNameChange} onSearch={this.updateSearchTerm}/>} />
                        <ListResources beersList={this.state.beers} searchTerm={this.state.searchTerm}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;

