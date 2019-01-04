import React, { Component } from 'react';
import './ParcelDeliveryApp.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class ParcelDeliveryApp extends Component {
    render() {
        return (
            <div className="alternate-background-one project-container top-border bottom-border">
                <h1 className="w3-center project-name">
                    Parcel Delivery Web App
                </h1>
                <div className="w3-center">
                    <p className="project-description-container">
                        Eazy Parcel is a parcel delivery comparision website which I worked on as an
                        side project. The app is e-commerce website where users can buy labels
                        to send parcel from one location to another. App offers domestic and worldwide package delivery
                        options from range of carriers like FedEx, DHL, USPS, etc. App allows
                        customers to buy labels, insure packages and track packages. The first version of the website
                        was launched in December 2018 and I am constantly working to add more features
                        and improve the existing code base.
                    </p><br/><br/>
                    <a className="website-link-styles w3-btn" href="https://eazy-shipping.herokuapp.com/" target="_blank">
                        View Website
                    </a><br/><br/><br/>
                </div>
                <div className="website-points">
                    <ul>
                        <li>
                            <FontAwesomeIcon className="icon-style-projects-page" icon="check-circle" />
                            Integrated with social media websites such as facebook and google to provide users
                            with an option to use their social media accounts to login
                        </li>
                        <li>
                            <FontAwesomeIcon className="icon-style-projects-page" icon="check-circle" />
                            Integrated multiple payments gateways such as Paypay and Authorize.net
                        </li>
                        <li>
                            <FontAwesomeIcon className="icon-style-projects-page" icon="check-circle" />
                            Integrated with other API's like address verification, parcel tracking, geolocation, etc.
                        </li>
                        <li>
                            <FontAwesomeIcon className="icon-style-projects-page" icon="check-circle" />
                            Used Spring Security and OAuth2 for user authorization
                        </li>
                        <li>
                            <FontAwesomeIcon className="icon-style-projects-page" icon="check-circle" />
                            Designed the the entire UI and implemented it using HTML, Java Script and various
                            CSS libraries such as Bootstrap, W3-Schools CSS and Materialize
                        </li>
                        <li>
                            <FontAwesomeIcon className="icon-style-projects-page" icon="check-circle" />
                            Used Java as the backend of the web app.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ParcelDeliveryApp;
