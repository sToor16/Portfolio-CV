import React  from 'react';
import './nameAndPicture.css'
import myPicutre from '../../images/myPicure.png'

export function NameAndPicture() {
    return (
        <div>
            <div className="my-name-styles w3-center">
                <span>Toor, Shubhpreet Singh</span>
            </div>
            <div className="w3-center">
                <span>Software Developer</span>
            </div>
            <div className="w3-center">
                <img className={"my-picture"} src={myPicutre} alt="My Picture"></img>
            </div>
        </div>
    );
}
