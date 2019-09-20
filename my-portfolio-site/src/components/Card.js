import React from "react";
import "../sass/components/card.scss";

/** TODO
 * Use Link API from Gatsby
 */

export default props => (
    <div className="card">
        <img src={props.image} />
        <div className="card-body">
            <h3>iCode North Dallas</h3>
            <p>Technical Lead and Lab Mentor</p>
            <p>Since July 2018</p>
            <button>Learn More</button>
        </div>
    </div>
);
