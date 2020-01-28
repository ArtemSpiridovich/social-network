import React from "react";
import Users from "./Users"
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/Users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const MyUsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users)

export default MyUsersContainer;