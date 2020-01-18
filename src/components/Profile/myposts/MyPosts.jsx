import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addNewPostCreator, onPostChangeCreator} from "../../../redux/state";


const MyPosts = (props) => {
    let postElements = props.posts.posts.map(p => <Post message = {p.message} likesCount = {p.likesCount}/>);
    let newPostElement = React.createRef();

    let addNewPost = () => {
        props.dispatch(addNewPostCreator());
    }
    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.dispatch(onPostChangeCreator(newText))
    }
    return (<div>
            <div className={s.newpost}>
                My posts
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.posts.newTextPost}/>
                    <div>
                    <button onClick={addNewPost}>Add new post</button>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;
