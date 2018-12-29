import React, { Component } from 'react';
import ParcelDeliveryApp from "./project-page-components/ParcelDeliveryApp/ParcelDeliveryApp";
import InventoryManagementSystem from "./project-page-components/InventoryManagementSystem/InventoryManagementSystem";
import UniversityBazaarSystem from "./project-page-components/UniversityBazaarSystem/UniversityBazaarSystem";
import ProperyRentalSystem from "./project-page-components/PropertyRentalSystem/ProperyRentalSystem";

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
