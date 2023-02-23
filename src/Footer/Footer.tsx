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
                            href="https://www.linkedin.com/in/tatsiana-shket-a57949206/">
                        linkedin
                    </a></div>
                    <div><a className={style.link}
                            href="https://t.me/tshket">telegram</a></div>
                    <div><a className={style.link}
                            href="https://github.com/Tatsiana1111">github</a></div>
                    <div><a className={style.link} href="https://www.codewars.com/users/Tatsiana1111">codewars</a>
                    </div>
                </div>
                <p className={style.p}>all rights reserved © 2023</p>
            </div>
        </div>
    );
};

