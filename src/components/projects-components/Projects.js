import React, { Component } from 'react';
import ParcelDeliveryApp from "./projects/ParcelDeliveryApp/ParcelDeliveryApp";
import InventoryManagementSystem from "./projects/InventoryManagementSystem/InventoryManagementSystem";
import UniversityBazaarSystem from "./projects/UniversityBazaarSystem/UniversityBazaarSystem";
import ProperyRentalSystem from "./projects/PropertyRentalSystem/ProperyRentalSystem";

class Projects extends Component {
    render() {
        return (
            <div>
                <ParcelDeliveryApp/>
                <ProperyRentalSystem/>
                <InventoryManagementSystem/>
                <UniversityBazaarSystem/>
            </div>
        );
    }
}

export default Projects;
