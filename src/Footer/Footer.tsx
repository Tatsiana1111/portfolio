import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container}`}>
                <h3 className={style.title}>TATSIANA SHKET</h3>
                <div className={style.linksBlock}>
                    <div><a className={style.link}
                            href="https://www.linkedin.com/">LINKEDIN</a></div>
                    <div><a className={style.link}
                            href="https://web.telegram.org/">TELEGRAM</a></div>
                    <div><a className={style.link}
                            href="https://www.instagram.com/">INSTAGRAM</a></div>
                    <div><a className={style.link} href="https://twitter.com">TWITTER</a>
                    </div>
                </div>
                <p>all rights reserved © 2022</p>
            </div>
        </div>
    );
};

