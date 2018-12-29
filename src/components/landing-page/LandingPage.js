import React, { Component } from 'react';
import CV from "./landing-page-components/cv-components/cv";
import AboutMe from "./landing-page-components/about-me-components/aboutMe";

class LandingPage extends Component {
    render() {
        return (
            <div>
                <CV/>
                <AboutMe/>
            </div>
        );
    }
}

export default LandingPage;
