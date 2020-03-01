import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./Ava/ProfileInfo";
import MyPostsContainer from "./myposts/Post/MyPostsContainer";

const Profile = (props) => {
    return (
            <div className={s.content}>
                <ProfileInfo updateStatus={props.updateStatus} profile={props.profile} status={props.status}/>
                <MyPostsContainer/>
            </div>
    );
}

export default Profile;

