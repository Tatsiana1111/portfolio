import React from 'react';
import style from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.link} href="#/main">HOME</a>
            <a className={style.link} href="#/skills">SKILLS</a>
            <a className={style.link} href="#/portfolio">PORTFOLIO</a>
            <a className={style.link} href="#/contacts">CONTACTS</a>
        </div>
    );
};

