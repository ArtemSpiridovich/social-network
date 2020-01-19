import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";


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
    subscribe(observe) {
        this._renderentirethree = observe
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._renderentirethree(this._state);

        // if (action.type === 'ADD-POST') {
        //     let post = {
        //         id: 5,
        //         message: this._state.profilePage.newTextPost,
        //         likesCount: 0
        //     }
        //     this._state.profilePage.posts.push(post);
        //     this._state.profilePage.newTextPost = '';
        //     this._renderentirethree(this._state);
        // } else if (action.type === 'UPDATE-NEW-TEXT-POST') {
        //     this._state.profilePage.newTextPost = action.newText;
        //     this._renderentirethree(this._state);
        // } else if (action.type === 'ADD-MESSAGE') {
        //     let message = {
        //         id: 5,
        //         message: this._state.dialogsPage.newTextMessage
        //     };
        //     this._state.dialogsPage.messages.push(message);
        //     this._state.dialogsPage.newTextMessage = '';
        //     this._renderentirethree(this._state);
        // } else if (action.type === 'UPDATE-NEW-TEXT-MESSAGE') {
        //     this._state.dialogsPage.newTextMessage = action.newMessage;
        //     this._renderentirethree(this._state);
        // }
    }
}




export default store
window.store = store