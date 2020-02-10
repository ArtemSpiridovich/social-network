import React from "react";
import s from './Avatar.module.css';
import Preloader from "../../../common/Preloader";

const Avatar = (props) => {

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={s.content}>
                <img src='https://99px.ru/sstorage/53/2013/12/tmb_91205_3821.jpg'/>
                <div className={s.ava}>
                    <img src={props.profile.photos.large}/>
                    Artem Spirydovich
                </div>
            </div>
        );
    }
}

export default Avatar;