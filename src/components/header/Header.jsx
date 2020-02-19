import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    let logout = () => {
        props.logout()
    }
    return (
        <header className={s.header}>
            <img src='https://s1.logaster.com/static/v3/img/products/logo.png'/>
            <div className={s.loginBlock}>{props.state.isAuth ? <div>{props.state.login}-
                    <button onClick={logout}>LogOut</button>
                </div>
                :
                <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
}

export default Header
