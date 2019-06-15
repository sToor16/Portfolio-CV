import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";

import './App.css';
import {NavBar} from "./components/shared/NavBar";

import { library } from '@fortawesome/fontawesome-svg-core';
import {faPhoneVolume, faEnvelope, faAddressCard, faCheckCircle} from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope, faPhoneVolume,faAddressCard,faCheckCircle);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    {/*<NavBar/>*/}
                    <Route exact path="" component={LandingPage}/>
                    <Route exact path="/portfolio-cv/" component={LandingPage}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
