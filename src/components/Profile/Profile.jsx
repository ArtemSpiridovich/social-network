import React from "react";
import s from './Profile.module.css';
import MyPosts from "./myposts/MyPosts";

const Profile = () => {
    return (
            <div className={s.contentnav}>
            <div className={s.content}>
                <img src='https://99px.ru/sstorage/53/2013/12/tmb_91205_3821.jpg'/><b/>
            <div>
                ava + description
            </div>
                <MyPosts/>
            </div>
            </div>
        );
}

export default Profile;
