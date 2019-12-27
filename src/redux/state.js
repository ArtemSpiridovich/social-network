import renderentirethree from './../render.js'

let state = {
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
        ]
    },
    newPage: {},
    musicPage: {},
    settingPage: {},
    sidebar: [
        {name: 'Dmitry'},
        {name: 'Sveta'},
        {name: 'Valera'}
    ]
}

export let addPost = () => {
    let post = {
        id: 5,
        message: state.profilePage.newTextPost,
        likesCount: 0
    }
    state.profilePage.posts.push(post);
    state.profilePage.newTextPost = '';
    renderentirethree(state);
}

export let updateNewTextPost = (newText) => {
    state.profilePage.newTextPost = newText;
    renderentirethree(state);
}

export let addMessage = (newMesage) => {
    let message = {
        id: 5,
        message: newMesage
    }
    state.dialogsPage.messages.push(message)
    renderentirethree(state);
}


export default state;