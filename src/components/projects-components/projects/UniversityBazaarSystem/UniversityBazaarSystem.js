import React, { Component } from 'react';

class UniversityBazaarSystem extends Component {
    render() {
        return (
            <div className="university-bazaar-system-container">
                <h1 className="w3-center project-name">
                    University Bazaar System
                </h1>
                <div className="w3-center">
                    <p className="project-description-container">
                        This academic project was part of course Agile Software Development. This course was taken under
                        Dr. Bahram Khalili. University Bazaar System's main focus was to design an one stop Android Application
                        for all the hassles and persons related to the University.<br></br>
                        The main focus of professor Khalili was to develop software using Agile Methodologies.
                        The project was divided into five sprints and completed along with four other team members. Through this project, I learned a lot of non-technical aspects such
                        as how to handle miss communication, soft skills, Daily Stand Up meetings, etc.
                    </p><br></br><br></br>
                </div>
                <div className="website-points">
                    <ul>
                        <li>Mobile application was designed for Android platform using Java.</li>
                        <li>Registration with the application was restricted only to person's who had university ID's.</li>
                        <li>Application had the functionality to make announcements, etc.</li>
                    </ul>
                </div><br></br><br></br>
            </div>
        );
    }
}

export default UniversityBazaarSystem;
