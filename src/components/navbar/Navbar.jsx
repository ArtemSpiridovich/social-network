import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import StoreContext from "../../StoreContext";

const Navbar = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let sidebarElements = store.getState().sidebar.map(s => <Sidebar name={s.name}/>)
                return (
                    <nav className={s.nav}>
                        <div className={s.item}>
                            <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
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
                            <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
                        </div>
                        <div>
                            <h2>Friends</h2>
                            {sidebarElements}
                        </div>
                    </nav>
                );
            }
        }
    </StoreContext.Consumer>
}


    export default Navbar;
