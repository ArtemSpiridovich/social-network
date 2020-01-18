import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    console.log(props);
    return (
        <div className='app-wrapper'>
            <div className='lineup'>
            </div>
            <Header/>
            {console.log('ANOTHER PORPS', props)}
            <Navbar sidebar={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route exact path='/Profile'
                       render={() => <Profile state={props.state.profilePage}
                                              dispatch={props.dispatch}/>}/>
                <Route exact path='/Dialogs'
                       render={() => <Dialogs state={props.state.dialogsPage}
                                              dispatch={props.dispatch}/>}/>
                <Route exact path='/News' render={News}/>
                <Route exact path='/Music' render={Music}/>
                <Route exact path='/Settings' render={Settings}/>
            </div>
        </div>
    );
}

export default App;
