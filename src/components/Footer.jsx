import React from "react";

import { footerText } from "../constants";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <h2 className="footer__text">
                    <div>sharknell</div>
                    <div>백승현</div>
                </h2>
                <div className="footer__info">
                    <div className="left">
                    </div>
                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            {footerText.map((footer, key) => (
                                <li key={key}>
                                    <a href={footer.link}>{footer.title}</a>
                                    <em>{footer.dsec}</em>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    &copy; 2023.10.17 ~ 2023.10.24 <br />
                    Used React
                </div>
            </div>
        </footer>
    )
}

export default Footer;