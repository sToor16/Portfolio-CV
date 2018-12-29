import React  from 'react';
import "./education.css"
import '../sharedCSS/sharedCSS.css'

export function Education() {
    return (
        <div>
            <div className="section-heading">
                EDUCATION
            </div>
            <div>
                <div className="subsection-heading">
                    The University of Texas at Arlington
                </div>
                <div className="subsection-content">MS (cs)<br></br>May 2019
                </div>
            </div>
            <div className="courses">
                <div className="subsection-heading">Courses</div>
                <div className="subsection-content">
                    Design and Analysis of Algorithms<br></br>
                    Software Design Patterns<br></br> Internet of Things<br></br>
                    Cloud Computing<br></br> Agile Software Engineering<br></br>
                    Enterprise Software Development<br></br>
                    Web Data Management<br></br> Distributed Systems<br></br>
                    Secure Programming<br></br>
                    Software Maintainence and Quality Assurance

                </div>
            </div>
        </div>

    );
}
