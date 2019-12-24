import React from "react";
import s from './Sidebar.module.css';


const Sidebar = (props) => {
    return (
        <div className={s.sidebar}>
            <img src='https://cs16planet.ru/steam-avatars/images/avatar2700.jpg'/>
            <a> {props.name}</a>
        </div>
    );
}

export default Sidebar;