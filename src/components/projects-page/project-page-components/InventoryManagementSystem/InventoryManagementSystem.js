import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class InventoryManagementSystem extends Component {
    render() {
        return (
            <div className="alternate-background-one project-container bottom-border">
                <h1 className="w3-center project-name">
                    Inventory Management System
                </h1>
                <div className="w3-center">
                    <p className="project-description-container">
                        This project was part of my course Enterprise Software Development with Industry Practises.
                        This course was taught by Eknaught Parsaud, CEO of Ayoka Systems. Inventory Management System
                        was developed to help a company/organisation keep track of it's asset's. Company's workers
                        who were authorized, can update the status(damaged, lost, etc.) of the asset. App was developed
                        for both web(ASP.net) and mobile(React Native).
                    </p><br></br>
                </div>
                <div className="website-points">
                    <ul>
                        <li>
                            <FontAwesomeIcon className="icon-style-projects-page" icon="check-circle" />
                            The web app was designed using Microsoft's ASP.net framework and mobile application was
                            designed using React Native. The content of web and mobile app was synchronized.
                        </li>
                        <li>
                            <FontAwesomeIcon className="icon-style-projects-page" icon="check-circle" />
                            Web application was deployed on AWS Bean Stalk.
                        </li>
                        <li>
                            <FontAwesomeIcon className="icon-style-projects-page" icon="check-circle" />
                            REST API was written in Node.JS to fetch data Mobile app and deployed on AWS Lambda.
                        </li>
                    </ul>
                </div><br></br><br></br>
            </div>
        );
    }
}

export default InventoryManagementSystem;
