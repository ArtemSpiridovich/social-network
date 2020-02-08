const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'What do you?', likesCount: 24},
        {id: 3, message: 'yoooooooooooooooo', likesCount: 166},
    ],
    newTextPost: 'it-incubator.com'
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let body = state.newTextPost
            return {
                ...state, newTextPost: '', posts: [...state.posts, {
                    id: 5,
                    message: body,
                    likesCount: 0
                }]
            };
        }
        case UPDATE_NEW_TEXT_POST:
            return {...state, newTextPost: action.newText};
        default:
            return state;
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

export default profileReducer;