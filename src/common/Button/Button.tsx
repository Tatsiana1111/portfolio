import React, {MouseEventHandler} from 'react';
import style from './Button.module.css';

type ButtonPropsType = {
    title: string
    onClick?: () => void

}

export const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={props.onClick}
                className={style.button}>{props.title}</button>
    );
};

