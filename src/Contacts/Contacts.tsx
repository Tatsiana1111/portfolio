import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Button} from "../common/Button/Button";

export const Contacts = () => {
    return (
        <div id={'/contacts'} className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>CONTACTS</h2>

                <form className={style.form} action="">
                    <span className={style.text}>Phone <a className={style.link} href="tel:+375(29)111-02-61">
                        <span>+375(29)111-02-61</span></a></span>
                    <input className={style.input} type="text"/>
                    <textarea className={style.textarea}></textarea>
                </form>
                <span className={style.button}><Button title={'SUBMIT'}/></span>
            </div>
        </div>
    );
};

