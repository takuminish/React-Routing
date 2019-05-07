import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/hobby" component={Hobby} />
            <Route path="/skill" component={Skill} />
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
