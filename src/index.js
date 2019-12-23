import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Post from "./components/Profile/myposts/Post/Post";
import Dialog from "./components/Dialogs/Dialog/Dialog";
import Message from "./components/Dialogs/Message/Message";

let posts = [
    {message: 'Hi, how are you?', likesCount: 0 },
    {message: 'What do you?', likesCount: 24},
    {message: 'yoooooooooooooooo', likesCount: 166},
];

let dialogs = [
    {id:1, name: 'Dimych'},
    {id:2, name: 'Andrey'},
    {id:3, name: 'Svetka'},
    {id:4, name: 'Diana'},
    {id:5, name: 'Victor'},
    {id:6, name: 'Valera'}
];

let messages = [
    {id: 1, mesage: 'Hi'},
    {id: 2, mesage: 'How are you?'},
    {id: 3, mesage: 'What do you?'},
    {id: 4, mesage: 'Yoooooooooo'}
];



ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
