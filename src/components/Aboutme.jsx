import React from "react";

import about from "../assets/img/about.jpg";
import { aboutmeText } from "../constants";

const Aboutme = () => {
    return (
        <section id="About">
            <div className="about__inner">
                <h2 className="aboutt__title">
                    {aboutmeText.title}
                </h2>

                <div className="about__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>


                <div className="about__text">
                    <div className="text">
                        <div>{aboutmeText.desc[0]}</div>
                        <div>{aboutmeText.desc[1]}</div>
                        <div>{aboutmeText.desc[2]}</div>
                    </div>
                    <div className="img">
                        <img src={about} alt="어바웃미" />
                    </div>
                </div>
                <div className="about__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    )
}

export default Aboutme;
