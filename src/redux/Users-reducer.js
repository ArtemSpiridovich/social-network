const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsd6IhKO_brDHW6yj-OkYLBt4bzOhpOBn9mvHfBN6qyMk4r7yfjw&s',
        //     followed: true,
        //     fullName: 'Dmitry',
        //     status: 'I am a boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsd6IhKO_brDHW6yj-OkYLBt4bzOhpOBn9mvHfBN6qyMk4r7yfjw&s',
        //     followed: true,
        //     fullName: 'Sveta',
        //     status: 'I am a girl',
        //     location: {city: 'Moskow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsd6IhKO_brDHW6yj-OkYLBt4bzOhpOBn9mvHfBN6qyMk4r7yfjw&s',
        //     followed: false,
        //     fullName: 'Victor',
        //     status: 'I am a teacher',
        //     location: {city: 'Kiev', country: 'Ukrain'}
        // },
        // {
        //     id: 4,
        //     photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsd6IhKO_brDHW6yj-OkYLBt4bzOhpOBn9mvHfBN6qyMk4r7yfjw&s',
        //     followed: false,
        //     fullName: 'Katya',
        //     status: 'I am a women',
        //     location: {city: 'London', country: 'England'}
        // },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case(FOLLOW):
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: true}
                    else
                        return u
                })
            }
        case(UNFOLLOW):
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: false}
                    else
                        return u
                })
            }
        case(SET_USERS):
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;
