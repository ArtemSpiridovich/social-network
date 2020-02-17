import React from "react";
import MyPosts from "../MyPosts";
import {onAddPost} from "../../../../redux/Profile-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
       profilePage: state.profilePage
    }
}

const MyPostsContainer = connect (mapStateToProps, {onAddPost}) (MyPosts)

export default MyPostsContainer;
