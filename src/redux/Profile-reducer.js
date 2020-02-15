import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE_NEW_TEXT_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'What do you?', likesCount: 24},
        {id: 3, message: 'yoooooooooooooooo', likesCount: 166},
    ],
    newTextPost: 'it-incubator.com',
    profile: null,
    status: null
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
        case SET_USER_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

export const onAddPost = () => ({type: ADD_POST})
export const onPostChange = (newText) => ({type: UPDATE_NEW_TEXT_POST, newText})
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatus(response.data));
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0){return dispatch(setUserStatus(status));}
        })
    }
}

export default profileReducer;