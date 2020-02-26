import React from "react";
import MyPosts from "../MyPosts";
import {onAddPost} from "../../../../redux/Profile-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
       posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect (mapStateToProps, {onAddPost}) (MyPosts)

export default MyPostsContainer;
