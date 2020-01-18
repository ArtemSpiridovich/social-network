const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 0},
                {id: 2, message: 'What do you?', likesCount: 24},
                {id: 3, message: 'yoooooooooooooooo', likesCount: 166},
            ],
            newTextPost: 'it-incubator.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
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
        },
        newPage: {},
        musicPage: {},
        settingPage: {},
        sidebar: [
            {name: 'Dmitry'},
            {name: 'Sveta'},
            {name: 'Valera'}
        ]
    },
    _renderentirethree() {
    },
    getState() {
        return this._state
    },
    subscribers(observe) {
        this._renderentirethree = observe
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let post = {
                id: 5,
                message: this._state.profilePage.newTextPost,
                likesCount: 0
            }
            this._state.profilePage.posts.push(post);
            this._state.profilePage.newTextPost = '';
            this._renderentirethree(this._state);
        } else if (action.type === 'UPDATE-NEW-TEXT-POST') {
            this._state.profilePage.newTextPost = action.newText;
            this._renderentirethree(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let message = {
                id: 5,
                message: this._state.dialogsPage.newTextMessage
            };
            this._state.dialogsPage.messages.push(message);
            this._state.dialogsPage.newTextMessage = '';
            this._renderentirethree(this._state);
        } else if (action.type === 'UPDATE-NEW-TEXT-MESSAGE') {
            this._state.dialogsPage.newTextMessage = action.newMessage;
            this._renderentirethree(this._state);
        }
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
export const addNewPostCreator = () => {
    return {
        type: ADD_POST
    }

}
export const onPostChangeCreator = (newText) => {
    return {
        type: UPDATE_NEW_TEXT_POST,
        newText: newText
    }
}

export default store
window.store = store