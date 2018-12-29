import React, { Component } from 'react';

class ProperyRentalSystem extends Component {
    render() {
        return (
            <div className="Propery-rental-system-container">
                <h1 className="w3-center project-name">
                    Property Rental System
                </h1>
                <div className="w3-center">
                    <p className="project-description-container">
                        This app is like an Airbnb clone. App has the functionality to search and book for
                        properties all around the world. Google maps were integrated to provide users on the spot
                        location of the property.
                    </p><br></br><br></br>
                    <a className="website-link-styles" href="https://eazy-shipping.herokuapp.com/" target="_blank">
                        View Website
                    </a><br></br><br></br>
                    <p className="focus-paragraph">
                        I worked on this project to learn AngularJS along with practising resposive designs.
                        <br></br>Also, focused on how to make UI interactive and beautiful.
                    </p>
                </div>
            </div>

        );
    }
}

export default ProperyRentalSystem;
