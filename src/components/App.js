import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import { Wrapper, Header, RouteLink  } from './styled';

// import main from './pages/main'
import SF from './pages/stackoverflow';
import GH from './pages/github';

import '../styles/App.css';


const App = () => {
    return (
        <Wrapper>
            <Header>
                <RouteLink to="/">StackOverflow</RouteLink>
                <RouteLink to="/gh">Github</RouteLink>
            </Header>
            <main>
                <Route exact path="/" component={ SF } />
                <Route path="/gh" component={ GH } />
            </main>
        </Wrapper>
    ); 
}

export default App