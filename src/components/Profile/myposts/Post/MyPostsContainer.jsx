import React from "react";
import MyPosts from "../MyPosts";
import {addNewPostCreator, onPostChangeCreator} from "../../../../redux/Profile-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
       profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addNewPostCreator());
        },
        onPostChange: (text) => {
            dispatch(onPostChangeCreator(text))
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;
