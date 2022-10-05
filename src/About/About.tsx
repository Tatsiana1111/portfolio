import React, {useState} from 'react';
import style from './About.module.css';
import styleContainer from '../common/styles/Container.module.css';
import {Skills} from "./Skills/Skills";
import css from '../common/images/css_icon.png'
import html from '../common/images/html_icon.png'
import js from '../common/images/js_icon.png'
import ts from '../common/images/ts_icon.png'
import react from '../common/images/react_icon.png'

export type SkillsType = {
    icon: string
    title: string
    description: string
}
export const About = () => {
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
        {
            icon: react,
            title: 'React Native',
            description: 'Risus viverra adipiscing at in tellus integer et dolore magna aliqua. Gravida arcu ac tortor dignissim convallis aenean.'
        },

    ])
    return (
        <div className={style.aboutBlock}>
            <div className={`${styleContainer.container} ${style.aboutContainer}`}>
                <h2 className={style.title}>ABOUT</h2>
                <div className={style.aboutSkills}>
                    {skills.map(skill => <Skills
                        icon={skill.icon}
                        title={skill.title}
                        description={skill.description}
                    />)}
                </div>
            </div>
        </div>
    );
};

