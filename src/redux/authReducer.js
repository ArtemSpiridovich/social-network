import {loginAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload:{userId, email, login, isAuth}})

export const authAccaunt = () => {
    return (dispatch) => {
        return loginAPI.authMe().then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                dispatch(setUserData(id, email, login, true))
            }
        })
    }
}

export const login = (login, password, rememberMe) => {
    return (dispatch) => {
        loginAPI.login(login, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authAccaunt())
            } else {
                debugger
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                let action = stopSubmit('login', {_error: message})
                dispatch(action)
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        loginAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
    }
}

export default authReducer;