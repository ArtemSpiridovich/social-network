const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 3, name: 'Svetka'},
        {id: 4, name: 'Diana'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi',},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What do you?'},
        {id: 4, message: 'Yoooooooooo'}
    ],
    newTextMessage: 'Hello'
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let body = state.newTextMessage
            return {
                ...state, newTextMessage: '', messages: [...state.messages,
                    {
                        id: 5,
                        message: body
                    }
                ]
            };
        }
        case UPDATE_NEW_TEXT_MESSAGE: {
            return {...state, newTextMessage: action.newMessage};
        }
        default:
            return state;
    }
}

export const onAddMessage = () => ({type: ADD_MESSAGE})
export const onMessageChange = (newMessage) => ({type: UPDATE_NEW_TEXT_MESSAGE, newMessage})


export default dialogsReducer;