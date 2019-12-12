import React from "react";
import s from './Navbar.module.css';

// let s = {
//     'nav': 'Navbar_nav__2kPZA' ,
//     'item': 'Navbar_item__1YtZa'
// }


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div >
                <a className={s.item} href=''>Profile</a>
            </div>
            <div >
                <a className={`${s.item} ${s.active}`} href=''>Messages</a>
            </div>
            <div>
                <a className={s.item} href=''>News</a>
            </div>
            <div>
                <a className={s.item} href=''>Music</a>
            </div>
            <div>
                <a className={s.item} href=''>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;
