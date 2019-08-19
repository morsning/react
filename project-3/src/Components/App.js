import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Search from './Search'
import { Nav } from './Nav'

class App extends React.Component {
    
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Nav />
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/search" component={SearchPage} />
                    </div>
                </Router>
            </div>
        );
    }
}

function Home() {
    return <h2>Home</h2>;
  }
  
function About() {
    return <h2>About</h2>;
}

function SearchPage() {
    return (
        <div>
            <Search />
        </div>
    );
}

export default App;

