import React from "react";
import "../sass/components/card.scss";

/** TODO
 * Use Link API from Gatsby (Add linkTo property for the API)
 * Update styling
 */

export default props => (
    <div className="card">
        <img src={props.image} />
        <div className="card-body">
            <h3>{props.title}</h3>
            <p>{props.position}</p>
            <p>{props.time}</p>
            <p>{props.description}</p>
            <p>{props.linkText}</p>
        </div>
    </div>
);
