import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import LandingPage from "./components/LandingPage";

import './App.css';
import {NavBar} from "./components/shared/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <NavBar/>
                <Route exact path="" component={LandingPage}/>
                <Route exact path="/aboutme" component={AboutMe}/>
                <Route exact path="/projects" component={Projects}/>
                <Route exact path="/contact" component={Contact}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
