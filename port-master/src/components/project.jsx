import React from "react";

import { projectText } from "../constants";

const Project = () => {
    return (
        <section id="project">
            <div className="project__inner">
                <h2 className="project__title">
                    Web Project <em>나의 작업물</em>
                </h2>
                <div className="project__wrap">
                    {projectText.map((Project, key) => (
                        <article className={`project__item s${key+1}`} key={key}>
                            <span className="num">{key+1}.</span>
                            <div className="text">
                                <div>{Project.text[0]}</div>
                                <div>{Project.text[1]}</div>
                                <div>{Project.text[2]}</div>
                            </div>
                            <h3 className="title">
                                {Project.title}
                            </h3>
                            <div className="btn">
                                <a href={Project.code}>code</a>
                                <a href={Project.view}>view</a>
                                <a href={Project.ppt}>ppt</a>
                            </div>
                            <h3 className="position">
                                My Position :  {Project.position}
                            </h3>
                            <div className="position">
                            </div>

                            <h3 className="charge-text">
                                 담당 역할 : {Project.charge}
                            </h3>

                            <div className="info">
                                <span>{Project.info[0]}</span>
                                <span>{Project.info[1]}</span>
                                <span>{Project.info[2]}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project;
