import React from "react";
import s from './Profile.module.css';
import MyPosts from "./myposts/MyPosts";
import Avatar from "./Ava/Avatar";

const Profile = (props) => {
    debugger
    return (
            <div className={s.content}>
                <Avatar/>
                <MyPosts posts={props.posts}/>
            </div>
    );
}

export default Profile;
