import React from "react";
import "../sass/app.scss";
import LandingHeroImage from "../../static/img/hero.jpg";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

/** TODO
 * Add better responsiveness
 */

export default () => (
    <div>
        <Navbar />
        <Hero
            source={LandingHeroImage}
            alternative="Landing Hero Image"
            mainText="Theo Loza"
            subText="Computer Science Student"
        />
    </div>
);
