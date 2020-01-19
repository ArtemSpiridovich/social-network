import React from "react";
import MyPosts from "../MyPosts";
import {addNewPostCreator, onPostChangeCreator} from "../../../../redux/Profile-reducer";
import StoreContext from "../../../../StoreContext";


const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState()
                let onAddPost = () => {
                    store.dispatch(addNewPostCreator());
                }
                let onPostChange = (text) => {
                    store.dispatch(onPostChangeCreator(text))
                }
                return <MyPosts onPostChange={onPostChange} onAddPost={onAddPost} posts={state.profilePage}/>
            }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer;
