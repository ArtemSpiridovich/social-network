import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addNewMessageCreator, onMessageChangeCreator} from "../../redux/state";


const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
    let messageElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageElement = React.createRef();
    let addNewMessage = () => {
        props.dispatch(addNewMessageCreator());
    }
    let onMessageChange = () => {
        let newMessage = newMessageElement.current.value;
        props.dispatch(onMessageChangeCreator(newMessage))
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
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newTextMessage}/>
                    <button onClick={addNewMessage}></button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;