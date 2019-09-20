import React from "react";
import "../sass/app.scss";
import LandingHeroImage from "../../static/img/hero.jpg";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";

/** TODO
 * Add better responsiveness
 * Add react helmet
 * Improve styles
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
        <Section>
            <div>
                <h1>About Me</h1>
                <p>
                    My name is Theo Loza and I am a Computer Science student
                    with a focus on full-stack development. I love to play video
                    games, watch music and listen to movies!
                </p>
            </div>
            <div>
                <h1>Education</h1>
                <h3>2016 - Dec 2019</h3>
                <p>The University of Texas at Dallas - Richardson, TX</p>
                <p>Bachelor of Science; Computer Science</p>
                <p>GPA: 3.0/4.0</p>

                <h3>2012 - 2016</h3>
                <p>
                    Cedar Valley College (Dual Credit Program) - Lancaster, TX
                </p>
                <p>Associate of Science</p>
                <p>GPA: 3.8/4.0</p>
            </div>
        </Section>
        <Section>
            <div>
                <h1>Work Experience</h1>
                <Card image={LandingHeroImage} />
            </div>
        </Section>
    </div>
);
