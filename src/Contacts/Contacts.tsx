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
                    <input className={style.input} type="text"/>
                    <input className={style.input} type="text"/>
                    <textarea className={style.textarea}></textarea>
                </form>
                <Button title={'SUBMIT'}/>
            </div>
        </div>
    );
};

