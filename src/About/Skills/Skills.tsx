import React from 'react';
import style from './Skills.module.css';
import {SkillsType} from "../About";

export const Skills = (props: SkillsType) => {
    return (
        <div className={style.skills}>
            <div className={style.square}><img className={style.icon} src={props.icon} alt={props.title}/></div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
};

