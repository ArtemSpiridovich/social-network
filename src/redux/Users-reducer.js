const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Sveta',
            status: 'I am a girl',
            location: {city: 'Moskow', country: 'Russia'}
        },
        {
            id: 3,
            followed: true,
            fullName: 'Victor',
            status: 'I am a teacher',
            location: {city: 'Kiev', country: 'Ukrain'}
        },
        {
            id: 4,
            followed: false,
            fullName: 'Katya',
            status: 'I am a women',
            location: {city: 'London', country: 'England'}
        },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case(FOLLOW):
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId)
                    return {...u, followed: true}
                })
            }
        case(UNFOLLOW):
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId)
                        return {...u, followed: false}
                })
            }
        case(SET_USERS):
            return {...state, users: [...state.users, action.users]}
        default:
            return state
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = () => ({type: SET_USERS})

export default usersReducer;
