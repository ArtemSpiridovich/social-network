import React from "react";
import {addNewMessageCreator, onMessageChangeCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState()
                let addNewMessage = () => {
                    store.dispatch(addNewMessageCreator());
                }
                let onMessageChange = (newMessage) => {
                    store.dispatch(onMessageChangeCreator(newMessage))
                }
                return <Dialogs state={state.dialogsPage} onAddMessage={addNewMessage} onMessageChange={onMessageChange}/>
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;