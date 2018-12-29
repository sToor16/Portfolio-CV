import React  from 'react';
import {Link} from "react-router-dom";

export function NavBar() {
    return (
        <div>
            <div>
                <div className="w3-row w3-large w3-light-grey">
                    <div className="w3-col s4">
                        <Link to="" className="w3-button w3-block">Home</Link>
                    </div>
                    <div className="w3-col s4">
                        <Link to="/projects" className="w3-button w3-block">Projects</Link>
                    </div>
                    <div className="w3-col s4">
                        <Link to="/contact" className="w3-button w3-block">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
