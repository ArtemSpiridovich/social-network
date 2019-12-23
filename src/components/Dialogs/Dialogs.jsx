import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogs = [
        {id:1, name: 'Dimych'},
        {id:2, name: 'Andrey'},
        {id:3, name: 'Svetka'},
        {id:4, name: 'Diana'},
        {id:5, name: 'Victor'},
        {id:6, name: 'Valera'}
    ];

    let dialogElement = dialogs.map(d => <Dialog name={d.name} id={d.id}/>)

    let messages = [
        {id: 1, mesage: 'Hi'},
        {id: 2, mesage: 'How are you?'},
        {id: 3, mesage: 'What do you?'},
        {id: 4, mesage: 'Yoooooooooo'}
    ];

    let messageElement = messages.map(m => <Message message={m.mesage} id={m.id}/>)
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsitems}>
                    {dialogElement}
                </div>
                <div className={s.messages}>
                    {messageElement}
                </div>
            </div>
    );
}

export default Dialogs;