import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MyUsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./common/Preloader";
import {compose} from "redux";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialize){
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <div className='lineup'>
                </div>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/Dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/login'
                           render={() => <Login/>}/>
                    <Route exact path='/News' render={News}/>
                    <Route exact path='/Music' render={Music}/>
                    <Route path='/Users'
                           render={() => <MyUsersContainer/>}/>
                    <Route exact path='/Settings' render={Settings}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({initialize: state.initialize.initialized})

export default compose(withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

