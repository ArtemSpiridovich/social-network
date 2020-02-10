const ADD_POST = 'ADD_POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE_NEW_TEXT_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'What do you?', likesCount: 24},
        {id: 3, message: 'yoooooooooooooooo', likesCount: 166},
    ],
    newTextPost: 'it-incubator.com',
    profile: null
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
        case SET_USER_PROFILE:
            return {...state, profile: action.userProfile}
        default:
            return state;
    }
}

export const onAddPost = () => ({type: ADD_POST})
export const onPostChange = (newText) => ({type: UPDATE_NEW_TEXT_POST, newText})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})

export default profileReducer;