import React from 'react';
import style from './Button.module.css';

type ButtonPropsType = {
    title: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button className={style.button}>{props.title}</button>
    );
};

