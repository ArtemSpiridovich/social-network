import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import {connect} from "react-redux";

const Navbar = (props) => {

    let sidebarElements = props.sidebar.map(s => <Sidebar key={s.name} name={s.name}/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/News' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Users' activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div>
                <h2>Friends</h2>
                {sidebarElements}
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}


export default connect(mapStateToProps)(Navbar);
