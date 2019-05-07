import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
    <BrowserRouter>
        <div>
            <Route exapt path="/" component={Home} />
        </div>
    </BrowserRouter>
)

class Home extends Component {
    render() {
        return(
	    <h1>Home</h1>
	);
    }

}

class Skill extends Component {
    render() {
        return(
            <h1>Skill</h1>
	);
    }

}

class Hobby extends Component {
    render() {
        return(
            <h1>Hobby</h1>
	);
    }
}

export default App;
