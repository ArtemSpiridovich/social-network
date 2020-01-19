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
        case ADD_POST:
            let post = {
                id: 5,
                message: state.newTextPost,
                likesCount: 0
            }
            state.posts.push(post);
            state.newTextPost = '';
            return state;
        case UPDATE_NEW_TEXT_POST:
            state.newTextPost = action.newText;
            return state;
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