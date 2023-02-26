import React, {useState} from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Skill} from "./Skill/Skill";
import css from '../common/images/icons8-css-файл-50.png'
import html from '../common/images/icons8-html-файл-50.png'
import js from '../common/images/icons8-javascript-50.png'
import ts from '../common/images/icons8-typescript-50.png'
import react from '../common/images/icons8-react-48.png'

export type SkillsType = {
    icon: string
    title: string
    description: string
}
export const Skills = () => {
    let [skills, setSkills] = useState<SkillsType[]>([
        {
            icon: html,
            title: 'HTML',
            description: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'
        },
        {
            icon: css,
            title: 'CSS',
            description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'
        },
        {
            icon: js,
            title: 'JS',
            description: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'
        },
        {
            icon: ts,
            title: 'TS',
            description: 'TypeScript is a free and open source high-level programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.'
        },
        {
            icon: react,
            title: 'React',
            description: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components.'
        },


    ])
    return (
        <div id='/skills' className={style.aboutBlock}>
            <div className={`${styleContainer.container} ${style.aboutContainer}`}>
                <h2 className={style.title}>SKILLS</h2>
                <div className={style.aboutSkills}>
                    {skills.map(skill => <Skill
                        key={skill.title}
                        icon={skill.icon}
                        title={skill.title}
                        description={skill.description}
                    />)}
                </div>
            </div>
        </div>
    );
};

