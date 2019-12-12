import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (<div>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add new post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message = 'Hi, how are you?' likesCount='0'/>
                <Post message = 'What do you?' likesCount='0'/>
            </div>
        </div>
    );
}

export default MyPosts;
