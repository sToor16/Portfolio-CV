import React, { Component } from 'react';
import {NameAndPicture} from "./nameAndPicture-Component/nameAndPicture";
import {Education} from "./education-component/education";
import {Languages} from "./languages-components/languages";
import {SocialLinks} from "./soical-links-components/socialLinks";
import {Skills} from "./skills-component/skills";

class CV extends Component {
    render() {
        return (
            <div>
                <NameAndPicture/>
                <div className="w3-row w3-container">
                    <div className="w3-half left-half">
                        <Education/>
                        <Languages/>
                        <SocialLinks/>
                    </div>
                    <div className="w3-half right-half">
                        <Skills/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CV;
