import React from "react";
import {onAddMessage, onMessageChange} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps, {onAddMessage, onMessageChange})(Dialogs)

export default DialogsContainer;