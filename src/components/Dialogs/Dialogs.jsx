import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
    let messageElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newTextMessage = React.createRef();
    let addNewMessage = () => {
        props.addNewMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>
                {dialogElements}
            </div>
            <div className={s.messageData}>
                <div className={s.messages}>
                    {messageElements}
                </div>
                <div className={s.newMessage}>
                    <textarea ref={newTextMessage}></textarea>
                    <button onClick={addNewMessage}></button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;