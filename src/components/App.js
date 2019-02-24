import React, { Component } from "react";
import { Route } from 'react-router-dom';
import { Wrapper, Header, RouteLink  } from './styled';

import SF from './pages/stackoverflow';
import GH from './pages/github';
import Detail from './pages/detail';

import '../styles/App.css';


const App = () => {
    return (
        <Wrapper>
            <Header>
                <RouteLink to="/sf">StackOverflow</RouteLink>
                <RouteLink to="/gh">Github</RouteLink>
                
            </Header>
            <main>
                <Route path="/sf" component={ SF } />
                <Route path="/gh" component={ GH } />
                <Route path="/detail" component={ Detail } />
            </main>
        </Wrapper>
    ); 
}

export default App
