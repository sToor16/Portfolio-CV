import React  from 'react';
import './socialLinks.css'

export function SocialLinks() {
    return (
        <div>
            <div className="section-heading section-heading-margin">
                LINKS
            </div>
            <div>
                <div>
                    <span className="subsection-heading">Github: </span>
                    <a href="https://github.com/stoor16" target="_blank" className="subsection-content">
                        github.com/stoor16
                    </a>
                </div>
                <div>
                    <span className="subsection-heading">LinkedIn: </span>
                    <a href="https://www.linkedin.com/in/stoor16/" target="_blank" className="subsection-content">
                        linkedin.com/in/stoor16
                    </a>
                </div>
                <div>
                    <span className="subsection-heading">Facebook: </span>
                    <a href="https://www.facebook.com/toor.17" target="_blank" className="subsection-content">
                        facebook.com/toor.17
                    </a>
                </div><br></br>
            </div>

        </div>
    );
}
