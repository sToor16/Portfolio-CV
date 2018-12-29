import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";

import './App.css';
import {NavBar} from "./components/shared/NavBar";
import Projects from "./components/projects-page/Projects";
import Contact from "./components/contact-page/Contact";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <NavBar/>
                <Route exact path="" component={LandingPage}/>
                <Route exact path="/portfolio-cv/" component={LandingPage}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/contact" component={Contact}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
