import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Button} from "../common/Button/Button";
import {useForm} from "react-hook-form";
import {init, sendForm} from "@emailjs/browser";

export const Contacts = () => {
    init('-Nf-Lep7B5XtWi-tv');
    const {
        register,
        handleSubmit,
        reset
    } = useForm({
        defaultValues: {
            email: "",
            message: "",
        }
    });


    const sendMail = () => {
        sendForm('service_xieh7ui', 'template_4o5ikql', '#contactForm', '-Nf-Lep7B5XtWi-tv')
            .then(
                (result) => {

                    if (result.status === 200) {
                        alert('Your message has been sent successfully!')
                    }

                },
                (error) => {
                    console.log(error.text);
                })
        reset()
    }


    return (
        <div id={'/contacts'} className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>CONTACTS</h2>
                <form id='contactForm' onSubmit={handleSubmit(sendMail)} className={style.form} action="">
                    <span className={style.text}>Phone <a className={style.link} href="tel:+375(29)111-02-61">
                        <span>+375(29)111-02-61</span></a></span>
                    <span>You can send me message on email</span>
                    <input placeholder='Enter your name or email' {...register("email")} className={style.input}
                           type="text"/>
                    <textarea placeholder='Enter your message' {...register("message")}
                              className={style.textarea}></textarea>
                    <span className={style.button}><Button title={'SEND'}/></span>
                </form>

            </div>
        </div>
    );
};

