import React  from 'react';
import './headingAndParagraph.css'

export function HeadingAndParagraph() {
    return (
        <div>
            <div className="about-me-heading">
                ABOUT ME
            </div>
            <div>
                <p className="about-me-paragraph">
                    Hi! I am Shubhpreet Singh Toor, a Software Engineer with
                    strong understanding of Data Structures, Algorithms and ability to pick up
                    new languages and frameworks quickly. Currently I am in final
                    semester (Spring'19) of Master Degree in CS from The University of
                    Texas at Arlington.
                </p>
                <hr></hr>
            </div>
        </div>

    );
}
