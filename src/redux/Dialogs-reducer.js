const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: 5,
                message: state.newTextMessage
            };
            state.messages.push(message);
            state.newTextMessage = '';
            return state;
        case UPDATE_NEW_TEXT_MESSAGE:
            state.newTextMessage = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addNewMessageCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const onMessageChangeCreator = (newMessage) => {

    return {
        type: UPDATE_NEW_TEXT_MESSAGE,
        newMessage: newMessage
    }
}

export default dialogsReducer;