import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogsData = [
        {id:1, name: 'Dimych'},
        {id:2, name: 'Andrey'},
        {id:3, name: 'Svetka'},
        {id:4, name: 'Diana'},
        {id:5, name: 'Victor'},
        {id:6, name: 'Valera'}
    ];
    let messagesData = [
        {mesage: 'Hi'},
        {mesage: 'How are you?'},
        {mesage: 'What do you?'},
        {mesage: 'Yoooooooooo'}
    ];
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsitems}>
                    <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                    <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>
                    <Dialog name={dialogsData[5].name} id={dialogsData[5].id}/>
                </div>
                <div className={s.messages}>
                    <Message message={messagesData[0].mesage}/>
                    <Message message={messagesData[1].mesage}/>
                    <Message message={messagesData[2].mesage}/>
                    <Message message={messagesData[3].mesage}/>
                </div>
            </div>
    );
}

export default Dialogs;