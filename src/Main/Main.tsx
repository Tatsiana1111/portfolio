import React from 'react';
import img from '../common/photo/photo_2022-10-31_10-17-46.jpg';
import style from './Main.module.css';

import styleContainer from '../common/styles/Container.module.css';

const Main = () => {
    return (
        <div id='/main' className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.text}>
                    <span className={style.span}>HI EVERYONE</span>
                    <h1>I AM TATSIANA SHKET</h1>
                    <span className={style.span}>FRONTEND DEVELOPER</span>
                </div>
                <img className={`${style.photo} ${style.kvadr}`} src={img}/>
            </div>
        </div>
    );
};

export default Main;