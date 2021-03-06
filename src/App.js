import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

const App = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/hobby">Hobby</Link></li>
                <li><Link to="/skill">Skill</Link></li>
            </ul>
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
            <div>
                <h1>Hobby</h1>
                <Route exact path="/hobby" component={HobbyList} />
                <Route exact path="/hobby/:id" component={Hobby} />
            </div>
            );
    }
}

class HobbyList extends Component {
    render() {
        return(
            <div>

            </div>
        );
    }
}

export default App;
