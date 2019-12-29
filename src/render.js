import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from "./redux/state";
import {addMessage} from "./redux/state";
import {updateNewTextPost} from "./redux/state";
import {BrowserRouter, Route} from "react-router-dom";

let renderentirethree = (state) => {
ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost} updateNewTextPost={updateNewTextPost} addNewMessage={addMessage}/>
    </BrowserRouter>
    , document.getElementById('root'));
}
serviceWorker.unregister();

export default renderentirethree

