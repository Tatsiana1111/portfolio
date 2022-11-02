import React, {useState} from 'react';
import style from "./Portfolio.module.css";
import styleContainer from "../common/styles/Container.module.css";
import {Project, ProjectPropsType} from "./Project/Project";

export const Portfolio = () => {
    let [projects, setProjects] = useState<ProjectPropsType[]>([
        {
            image: 'https://media.istockphoto.com/photos/to-do-list-in-spiral-notepad-isolated-on-desk-picture-id1330040188?b=1&k=20&m=1330040188&s=170667a&w=0&h=3qCVSmD_-jOhmekoFh_0oH5KYGEjvcaK2azWkT-ZRYU=',
            title: 'Todolist',
            description: 'Lorem ipsum dolor sit amet, consectetur a dolore.'
        },
        {
            image: 'https://img.freepik.com/premium-photo/social-media-icons-logos-mobile-phone-screen-3d_125322-174.jpg?w=2000',
            title: 'Social Network',
            description: 'Accumsan lacus vel facilisis volutpat. Cras pulvinar mattis nunc sed blandit'
        },
        {
            image: 'https://camo.githubusercontent.com/4cedcfc0d2deed6ac298d9454dac617a8cbcec25b1ad3070fb24ebf0106b587d/68747470733a2f2f696d6775722e636f6d2f633237754663392e6a7067',
            title: 'Pizza',
            description: 'Faucibus scelerisque eleifend donec pretium.Tempus iaculis urna id volutpat lacus.'
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

