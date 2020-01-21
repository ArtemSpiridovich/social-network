import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
    let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageElement = React.createRef();
    let addNewMessage = () => {
        props.onAddMessage();
    }
    let onMessageChange = () => {
        let newMessage = newMessageElement.current.value;
        props.onMessageChange(newMessage);
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
                    <textarea placeholder='Enter your message' onChange={onMessageChange} ref={newMessageElement}
                              value={props.dialogsPage.newTextMessage}/>
                    <button onClick={addNewMessage}></button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;