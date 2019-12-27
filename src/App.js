import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {addMessage} from "./redux/state";
import {updateNewTextPost} from "./redux/state";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <div className='lineup'>
                </div>
                <Header/>
                <Navbar sidebar={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route exact path='/Profile'
                           render={()=> <Profile state={props.state.profilePage} addPost={props.addPost} updateNewTextPost={updateNewTextPost}/>}/>
                    <Route exact path='/Dialogs'
                           render={()=> <Dialogs state={props.state.dialogsPage} addNewMessage={addMessage}/>}/>
                    <Route exact path='/News' render={News}/>
                    <Route exact path='/Music' render={Music}/>
                    <Route exact path='/Settings' render={Settings}/>
                </div>
            </div>
    );
}

export default App;
