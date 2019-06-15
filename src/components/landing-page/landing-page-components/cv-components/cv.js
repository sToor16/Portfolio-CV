import React, { Component } from 'react';
import {NameAndPicture} from "./nameAndPicture-Component/nameAndPicture";
import './sharedCSS/responsive.css'

class CV extends Component {
    render() {
        return (
            <div>
                <NameAndPicture/>
            </div>
        );
    }
}

export default CV;
