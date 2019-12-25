import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount = {p.likesCount}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        let newText = newPostElement.current.value;
        newPostElement.current.value = '';
        let NewPost: {
            message: newText,
            likesCount: 10
        }

    }
    return (<div>
            <div className={s.newpost}>
                My posts
                <div>
                    <textarea ref={newPostElement}></textarea>
                    <div>
                    <button onClick={addPost}>Add new post</button>
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
