import React from "react";
import s from './Avatar.module.css';

const Avatar = () => {
    return (
            <div className={s.content}>
                <img src='https://99px.ru/sstorage/53/2013/12/tmb_91205_3821.jpg'/>
                <div>
                    ava + description
                </div>
            </div>
    );
}

export default Avatar;