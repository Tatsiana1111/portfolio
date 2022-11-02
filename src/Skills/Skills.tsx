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
            description: 'Lorem ipsum dolor sit amet, consectetur a dolore magna aliqua. Gravida arcu ac tortor dignissim convallis aenean.'
        },
        {
            icon: css,
            title: 'CSS',
            description: 'Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Cras pulvinar mattis nunc sed blandit.'
        },
        {
            icon: js,
            title: 'JS',
            description: 'Lectus magna fringilla urna porttitor rhoncus dolor purus non. Tempus iaculis urna id volutpat lacus. Faucibus scelerisque eleifend donec pretium.'
        },
        {
            icon: ts,
            title: 'TS',
            description: 'Tempus impus iaculis urna id volutpat lacus. Faucibus scelerisque eleifend donec pretium.'
        },
        {
            icon: react,
            title: 'React',
            description: 'Interdum varius sit amet mattis vulputate enim nulla aliquet. Turpis cursus in hac habitasse platea dictumst.'
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

