import React from 'react';
import style from './Project.module.css';
import {Button} from "../../common/Button/Button";

export type ProjectPropsType = {
    image: string
    title: string
    description: string
}
export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.projectBlock}>
            <div className={style.projectBlock}>
                <div><img className={style.image} src={props.image} alt={props.title}/></div>
                <span className={style.button}><Button title={'VIEW PROJECT'}/></span>
            </div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
};

