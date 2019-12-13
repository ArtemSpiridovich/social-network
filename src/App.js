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

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <div className='lineup'>
                </div>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/Profile' component={Profile}/>
                    <Route exact path='/Dialogs' component={Dialogs}/>
                    <Route exact path='/News' component={News}/>
                    <Route exact path='/Music' component={Music}/>
                    <Route exact path='/Settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
