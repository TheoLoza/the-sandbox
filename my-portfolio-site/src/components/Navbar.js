import React from "react";
import "../sass/components/navbar.scss";

/** TODO
 * Add Link API from Gatsby
 * Create the links array to pass names and links to the hrefs
 * Replace spans with the Link tags
 */

// const links = [];

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="nav-links">
                <li className="nav-item">
                    {/* <a>About Me</a> */}
                    <span>About Me</span>
                </li>
                <li className="nav-item">
                    {/* <a>About Me</a> */}
                    <span>Work</span>
                </li>
                <li className="nav-item">
                    {/* <a>About Me</a> */}
                    <span>Portfolio</span>
                </li>
                <li className="nav-item">
                    {/* <a>About Me</a> */}
                    <span>Resume</span>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
