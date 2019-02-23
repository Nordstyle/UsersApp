import React, { Component } from "react"
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'

// import main from './pages/main'
import sf from './pages/stackoverflow'
import gh from './pages/github'

import '../styles/App.css'

const Wrapper = styled.div`
    max-width: 120rem;
    heihgt: 100vh;
    margin: 0 auto;
    padding-left: 0.6rem;
    padding-right: 0.6rem;
`;

const Header = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    box-shadow: 0 10px 20px -10px rgba(0, 0, 0, .09), 0 5px 10px -5px rgba(0, 0, 0, .09);
    border-bottom: 0.1rem solid #e2e2e2;  
    margin-bottom: 2rem;
`;

const RouteLink = styled(Link)`
    padding: 1rem 2.4rem;
    margin: 0 1rem;
    font-family: 'Pacifico', cursive;
    font-size: 2rem;
    color: #24292e;
    transition: 0.3s;
    &:hover {
        text-shadow: 0px -1px #F48024;
    }
`;
const App = () => {
    return (
        <Wrapper>
            <Header>
                <RouteLink to="/">StackOverflow</RouteLink>
                <RouteLink to="/gh">Github</RouteLink>
            </Header>
            <main>
                <Route exact path="/" component={sf} />
                <Route path="/gh" component={gh} />
            </main>
        </Wrapper>
    ); 
}

export default App