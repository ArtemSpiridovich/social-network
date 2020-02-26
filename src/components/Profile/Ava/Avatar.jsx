import React from "react";
import s from './Avatar.module.css';
import Preloader from "../../../common/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const Avatar = (props) => {

    if (!props.profile) {
        return <Preloader/>
    } else {
        return (
            <div className={s.content}>
                {/*<img src={props.profile.photos.large}/>*/}
                <div className={s.ava}>
                    <img src={props.profile.photos.small}/>
                    {props.profile.fullName}
                </div>
                Status: <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status}/>
                <span>About me: {props.profile.aboutMe}</span>
                <ul>
                    Contacts:
                    <li>
                        facebook: {props.profile.contacts.facebook}
                    </li>
                    <li>
                        website: {props.profile.contacts.website}
                    </li>
                    <li>
                        vk: {props.profile.contacts.vk}
                    </li>
                    <li>
                        twitter: {props.profile.contacts.twitter}
                    </li>
                    <li>
                        instagam: {props.profile.contacts.instagam}
                    </li>
                    <li>
                        youtube: {props.profile.contacts.youtube}
                    </li>
                    <li>
                        github: {props.profile.contacts.github}
                    </li>
                    <li>
                        mainLink: {props.profile.contacts.mainLink}
                    </li>
                </ul>
                <div>lookingForAJob: {props.profile.lookingForAJob}</div>
                <div>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</div>
            </div>
        );
    }
}

export default Avatar;