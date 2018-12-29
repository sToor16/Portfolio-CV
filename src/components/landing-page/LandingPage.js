import React, { Component } from 'react';
import {NameAndPicture} from "./landing-page-components/nameAndPicture-Component/nameAndPicture";
import {Education} from "./landing-page-components/education-component/education";
import {Skills} from "./landing-page-components/skills-component/skills";

class LandingPage extends Component {
    render() {
        return (
            <div>
                <NameAndPicture/>
                <div className="w3-row w3-container">
                    <div className="w3-half left-half">
                        <Education/>
                    </div>
                    <div className="w3-half right-half">
                        <Skills/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
