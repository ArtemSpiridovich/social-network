import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Profile from "./components/Profile/Profile";
import MyPosts from "./components/Profile/myposts/MyPosts";

const App = () => {
    return (
        <div className='app-wrapper'>
            <div className='lineup'>
            </div>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
