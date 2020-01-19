import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.onAddPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.onPostChange(text)
    }
    return (<div>
            <div className={s.newpost}>
                My posts
                <div>
                    <textarea placeholder='Enter your post' onChange={onPostChange} ref={newPostElement}
                              value={props.posts.newTextPost}/>
                    <div>
                        <button onClick={onAddPost}>Add new post</button>
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
