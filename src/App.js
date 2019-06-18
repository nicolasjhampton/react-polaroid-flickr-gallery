import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

import { Gallery, Navigation, Search } from "./components";

class App extends Component {
    render() {
        const Div = styled.div`
            display: grid;
            width: 100vw;
            min-height: 100vh;
            margin: 0;
            padding: 0;
            grid-template-rows: 100px 200px auto;
        `;
        const Header = styled.div`
            display: flex;
            position: fixed;
            flex-direction: column;
            z-index: 50;
            width: 100%;
            background: linear-gradient(to bottom, white 80%, transparent 85%);
            @media (min-width: 726px) {
                flex-direction: row;
            }
        `;
        return (
            <BrowserRouter>
                <Div id="page">
                    <Header>
                        <Route component={Search} />
                        <Route component={Navigation} />
                    </Header>
                    <Switch>
                        <Route path="/react-polaroid-flickr-gallery/:search" component={Gallery} />
                        <Redirect to="/react-polaroid-flickr-gallery/treehouse" />
                    </Switch>
                </Div>
            </BrowserRouter>
        );
    }
}

export default App;
