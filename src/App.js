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

const App = (props) => {
    debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <div className='lineup'>
                </div>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route exact path='/Profile' component={Profile}/>*/}
                    <Route exact path='/Profile' render={()=> <Profile posts={props.posts}/> }/>
                    <Route exact path='/Dialogs' render={()=> <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route exact path='/News' render={News}/>
                    <Route exact path='/Music' render={Music}/>
                    <Route exact path='/Settings' render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
