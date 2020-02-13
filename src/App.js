import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MyUsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";

const App = (props) => {
    console.log(props);
    return (
        <div className='app-wrapper'>
            <div className='lineup'>
            </div>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route exact path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route exact path='/Dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route exact path='/News' render={News}/>
                <Route exact path='/Music' render={Music}/>
                <Route exact path='/Users'
                       render={() => <MyUsersContainer/>}/>
                <Route exact path='/Settings' render={Settings}/>
            </div>
        </div>
    );
}

export default App;
