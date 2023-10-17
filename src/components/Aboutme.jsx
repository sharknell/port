    import React from "react";

    import about from "../assets/img/about.jpg";
    import { aboutmeText } from "../constants";
    import '../assets/scss/section/_aboutme.scss'
    const Aboutme = () => {
        return (
            <div>
                <div id="aboutme">
                    <div className="about__inner">
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
                                <div>{aboutmeText.title}</div>
                                <div>{aboutmeText.desc[0]}</div>
                                <div>{aboutmeText.desc[1]}</div>
                                <div>{aboutmeText.desc[2]}</div>
                            </div>
                            <div className="img">
                                <img src={about} alt="어바웃미" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    export default Aboutme;
