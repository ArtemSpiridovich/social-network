import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsitems}>
                    <Dialog name="Dimych" id='1'/>
                    <Dialog name="Andrey" id='2'/>
                    <Dialog name="Svetka" id='3'/>
                    <Dialog name="Diana" id='4'/>
                    <Dialog name="Victor" id='5'/>
                    <Dialog name="Valera" id='6'/>
                </div>
                <div className={s.messages}>
                    <Message message='Hi'/>
                    <Message message='How are you?'/>
                    <Message message='what do you?'/>
                    <Message message='Yo'/>
                </div>
            </div>
    );
}

export default Dialogs;