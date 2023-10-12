import React from "react";

import './stack.css';

const Stack = () => {


    return (
        <section id="stack">
            <ul className="stack_list">
                <h2><span>SKILLS</span></h2>
                <li>Front End Stack</li>
                <ul>
                    <li><span>HTML5</span></li>&nbsp;&nbsp;&nbsp;&nbsp;
                    <li><span>CSS3</span></li>&nbsp;&nbsp;&nbsp;&nbsp;
                    <li><span>BOOTSTRAP</span></li>&nbsp;&nbsp;&nbsp;&nbsp;
                    <li><span>JAVASCRIPT</span></li>&nbsp;&nbsp;&nbsp;&nbsp;
                    <li><span>REACT</span></li>&nbsp;&nbsp;&nbsp;&nbsp;
                </ul>
                <li>Back End Stack</li>
                <ul>
                    <li><span>JAVA</span></li>&nbsp;&nbsp;&nbsp;&nbsp;
                    <li><span>SPRINGBOOT</span></li>&nbsp;&nbsp;&nbsp;&nbsp;
                    <li><span>MariaDB</span></li>&nbsp;&nbsp;&nbsp;&nbsp;
                    <li><span>MySQL</span></li>&nbsp;&nbsp;&nbsp;&nbsp;
                </ul>
                <li>ETC</li>
                <ul>
                    <li><span>MacOs</span></li>&nbsp;&nbsp;&nbsp;&nbsp;
                    <li><span>MySql</span></li>&nbsp;&nbsp;&nbsp;&nbsp;
                    <li><span>IntelliJ</span></li>&nbsp;&nbsp;&nbsp;&nbsp;
                    <li><span>GitHub</span></li>&nbsp;&nbsp;&nbsp;&nbsp;
                </ul>
            </ul>
        </section>
    );
}
export default Stack;
