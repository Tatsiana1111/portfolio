import React from 'react';
import style from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.link} href="">HOME</a>
            <a className={style.link} href="">ABOUT</a>
            <a className={style.link} href="">PORTFOLIO</a>
            <a className={style.link} href="">CONTACTS</a>
        </div>
    );
};

