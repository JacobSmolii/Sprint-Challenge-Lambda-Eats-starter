import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Form from './components/Form';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <div className="container">
            <nav className="navbar">
                <Link to="/">
                    <button name = 'homebutton'>Home</button>
                </Link>
                <br/>
                <Link to="/form">
                    <button name = 'orderbutton'>Order</button>
                </Link>
            </nav>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/form" component={Form} />
                </Switch>
            </div>
            </div>
        </Router>
    );
}

export default App;
