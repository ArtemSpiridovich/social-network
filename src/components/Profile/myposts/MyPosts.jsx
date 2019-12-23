import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    debugger
    let postElements = props.posts.map(p => <Post message={p.message} likesCount = {p.likesCount}/>);
    return (<div>
            <div className={s.newpost}>
                My posts
                <div>
                    <textarea></textarea>
                    <div>
                    <button>Add new post</button>
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
