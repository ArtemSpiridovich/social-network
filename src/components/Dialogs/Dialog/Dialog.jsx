import React from "react";
import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id
    return (
                <div className={s.dialog}>
                    <img src='https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg'/>
                    <NavLink to={path}> {props.name}</NavLink>
                </div>
    );
}

export default Dialog;