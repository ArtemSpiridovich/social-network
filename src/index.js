import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state'
import * as serviceWorker from './serviceWorker';
import {addPost, updateNewTextPost, addMessage, updateNewTextMessage, subscribes} from "./redux/state";
import {BrowserRouter, Route} from "react-router-dom";

let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewTextMessage={updateNewTextMessage}
                 updateNewTextPost={updateNewTextPost} addNewMessage={addMessage}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireThree(state)

subscribes(rerenderEntireThree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

