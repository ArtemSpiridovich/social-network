import React from "react";
import s from './Avatar.module.css';
import Preloader from "../../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, updateStatus, status}) => {

    if (!profile) {
        return <Preloader/>
    } else {
        return (
            <div className={s.content}>
                <div className={s.ava}>
                    <img src={profile.photos.large}/>
                </div>
                <ProfileData profile={profile} updateStatus={updateStatus} status={status}/>
            </div>
        );
    }
}



const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}



const ProfileData = ({profile, updateStatus, status}) => {
    return <div>
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>

        <div><b>lookingForAJob</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>

        {profile.lookingForAJob &&
        <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>}

        <b>Status</b>: <ProfileStatusWithHooks updateStatus={updateStatus} status={status}/>

        <span><b>About me</b>: {profile.aboutMe}</span>

        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}



export default ProfileInfo;