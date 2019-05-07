import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {
    
    render() {
        return (
	    <h1>app</h1>
	);
    }
}

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
