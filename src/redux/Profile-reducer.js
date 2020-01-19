const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';


const profileReducer = (state, action) => {
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