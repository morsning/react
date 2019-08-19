import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from './Search'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/search" component={Search} />
                </div>
            </Router>
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

