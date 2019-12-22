import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message = 'Hi, how are you?' likesCount='0'/>
                <Post message = 'What do you?' likesCount='24'/>
            </div>
        </div>
    );
}

export default MyPosts;