import {usersAPI} from "../api/api";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: null,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case(FOLLOW):
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: true};
                    else
                        return u
                })
            };
        case(UNFOLLOW):
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: false};
                    else
                        return u
                })
            };
        case(SET_USERS):
            return {...state, users: action.users};
        case(SET_CURRENT_PAGE):
            return {...state, currentPage: action.currentPage};
        case(SET_TOTAL_COUNT):
            return {...state, totalUsersCount: action.totalCount};
        case(TOGGLE_IS_FETCHING):
            return {...state, isFetching: action.isFetching};
        case(TOGGLE_IS_FOLLOWING_IN_PROGRESS):

            return {...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)};
        default:
            return state
    }
};


export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toogleFollowingInProgress = (followingInProgress, id) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, followingInProgress, id});



export const getUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingInProgress(true, userId))
        usersAPI.followUser(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toogleFollowingInProgress(false, userId))
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toogleFollowingInProgress(true, userId))
        usersAPI.unfollowUser(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toogleFollowingInProgress(false, userId))
        })
    }
}

export default usersReducer;
