import React, { Component } from "react"
import { Route, Link } from 'react-router-dom'

import sf from './pages/stackoverflow'
import gh from './pages/github'

import '../styles/App.css'


class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <Link to="/">StackOverflow</Link>
                    <Link to="/gh">Github</Link>
                </header>

                <main>
                    <Route exact path="/" component={sf} />
                    <Route path="/gh" component={gh} />
                </main>
            </div>
        );
    }
}

export default App