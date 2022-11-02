import React from 'react';
import style from './Skill.module.css';
import {SkillsType} from "../Skills";

export const Skill = (props: SkillsType) => {
    return (
        <div className={style.skills}>
            <div className={style.square}><img className={style.icon} src={props.icon} alt={props.title}/></div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
};

