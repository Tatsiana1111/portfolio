import React, {useState} from 'react';
import style from "./Portfolio.module.css";
import styleContainer from "../common/styles/Container.module.css";
import {Project, ProjectPropsType} from "./Project/Project";

export const Portfolio = () => {
    let [projects, setProjects] = useState<ProjectPropsType[]>([
        {
            image: 'https://media.istockphoto.com/photos/to-do-list-in-spiral-notepad-isolated-on-desk-picture-id1330040188?b=1&k=20&m=1330040188&s=170667a&w=0&h=3qCVSmD_-jOhmekoFh_0oH5KYGEjvcaK2azWkT-ZRYU=',
            title: 'Todolist',
            description: 'Very convenient daily application for planning tasks for the day.'
        },
        {
            image: 'https://img.freepik.com/premium-photo/social-media-icons-logos-mobile-phone-screen-3d_125322-174.jpg?w=2000',
            title: 'Social Network',
            description: 'Social network for communication with friends and colleagues.'
        },
        {
            image: 'data:image/jpeg;base64,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',
            title: 'Learning cards',
            description: 'Tutorial for learning flashcards with various terms.'
        },
    ])
    return (
        <div id={'/portfolio'} className={style.portfolioBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>PORTFOLIO</h2>
                <div className={style.projects}>
                    {projects.map(project => <Project
                        key={project.title}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                    />)}
                </div>
            </div>
        </div>
    );
};

