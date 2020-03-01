import React, {Component} from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MyUsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./common/Preloader";
import {compose} from "redux";

const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Music = React.lazy(() => import('./components/Music/Music'));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialize) {
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
                    <Route exact path='/Music'
                           render={() => {
                               return <React.Suspense fallback={<div>Loading...</div>}>
                                   <Music/>
                               </React.Suspense>
                           }}/>
                    <Route path='/Users'
                           render={() => <MyUsersContainer/>}/>
                    <Route exact path='/Settings'
                           render={() => {
                               return <React.Suspense fallback={<div>Loading...</div>}>
                                   <Settings/>
                               </React.Suspense>
                           }}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({initialize: state.initialize.initialized})

export default compose(withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

