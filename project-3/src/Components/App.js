import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
import Search from './Search'
import { Nav } from './Nav'
import { ListResources } from './ListResources';
import { Home } from './Home'
import { About } from './About'

class App extends React.Component {
    state = {
        categorySelected : 0,
        selectedBeerName : '',
        beers: []
    }
    
    onCategoryChange = selectedCat => {
        console.log("selected category: " + selectedCat)
        this.setState({
            categorySelected : selectedCat
        })
    }

    getDataFromAPI = queryString => {
        axios.get(`https://api.punkapi.com/v2/beers?beer_name=${queryString}`)
        .then(res => {
        console.log(res.data);
        this.setState({beers: res.data});
      })
    }

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Nav selectedCat={this.state.categorySelected} onSelect={this.onCategoryChange}/>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/search" render={() => <Search onNameSelect={this.onBeerNameChange} onSearch={this.getDataFromAPI}/>} />
                        <ListResources beersList={this.state.beers}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;

