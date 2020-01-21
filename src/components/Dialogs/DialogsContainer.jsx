import React from "react";
import {addNewMessageCreator, onMessageChangeCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(addNewMessageCreator())
        },
        onMessageChange: (newMessage) => {
            dispatch(onMessageChangeCreator(newMessage))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;