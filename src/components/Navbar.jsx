import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='items'>
                <a href=''>Profile</a>
            </div>
            <div>
                <a href=''>Profile</a>
            </div>
            <div>
                <a href=''>News</a>
            </div>
            <div>
                <a href=''>Music</a>
            </div>
            <div>
                <a href=''>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;
