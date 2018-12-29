import React, { Component } from 'react';
import './aboutMe.css'
import {HeadingAndParagraph} from "./heading-and-paragraph-components/headingAndParagraph";

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me-container w3-center">
               <HeadingAndParagraph/>
            </div>
        );
    }
}

export default AboutMe;
