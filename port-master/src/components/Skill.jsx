import React from "react";

import { skillText } from "../constants";

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">
                    About me  <em> 나의 경험 </em>
                </h2>
                <div className="skill__desc">
                    {skillText.map((skill, key) => (
                        <div key={key}>
                            <span>{key+1}.</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skill;