import React from "react";
import s from './Profile.module.css';
import MyPosts from "./myposts/MyPosts";
import Avatar from "./Ava/Avatar";

const Profile = () => {
    return (
            <div className={s.content}>
                <Avatar/>
                <MyPosts/>
            </div>
    );
}

export default Profile;
