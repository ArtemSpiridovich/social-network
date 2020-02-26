import React from "react";
import s from './Profile.module.css';
import Avatar from "./Ava/Avatar";
import MyPostsContainer from "./myposts/Post/MyPostsContainer";

const Profile = (props) => {
    return (
            <div className={s.content}>
                <Avatar updateStatus={props.updateStatus} profile={props.profile} status={props.status}/>
                <MyPostsContainer/>
            </div>
    );
}

export default Profile;

