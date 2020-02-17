import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let addNewPost = (formData) => {
        props.onAddPost(formData.addNewPost)
        formData.addNewPost = ''
    }
    return (<div>
            <div className={s.newpost}>
                My posts
                <AddNewPostRedux onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

const AddNewPost = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name='addNewPost' placeholder='Enter your post' component='textarea'/>
        <button>Add new post</button>
        <button>Remove</button>
    </form>
}

const AddNewPostRedux = reduxForm({form: "profileAddNewPost"})(AddNewPost)

export default MyPosts;
