import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.center}>
        <div className={s.posts}>
            <div className={s.post}>
                <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg'/>
                <div>{props.message}</div>
            </div>
            <div className={s.line}>
            </div>
            <div className={s.like}>
                <span>like</span> {props.likesCount}
            </div>
        </div>
        </div>
    );
}

export default Post;
