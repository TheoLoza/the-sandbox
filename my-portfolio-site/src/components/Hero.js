import React from "react";
import "../sass/components/hero.scss";

/** TODO
 * Add icons
 */

export default props => (
    <div className="hero">
        <img className="hero-img" src={props.source} alt={props.alternate} />
        <div className="hero-text">
            <h1>{props.mainText}</h1>
            <p>{props.subText}</p>
        </div>
    </div>
);
