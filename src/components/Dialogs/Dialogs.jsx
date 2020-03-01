import React from "react";
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100);

const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
    let messageElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
    let addMessageNew = (formData) => {
        props.onAddMessage(formData.newMessageBody)
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
                <AddMessageFormRedux onSubmit={addMessageNew}/>
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={s.newMessage}>
            <Field component={Textarea} validate={[requiredField, maxLength100]} name="newMessageBody" placeholder='Enter your message'/>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;