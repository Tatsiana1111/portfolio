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
                <Button title={'VIEW PROJECT'}/>
            </div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
};

