import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {
    let postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);
    let addNewPost = (formData) => {
        props.onAddPost(formData.addNewPost)
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
});

const AddNewPost = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name='addNewPost' placeholder='Enter your post' component={Textarea}
        validate={[requiredField, maxLength10]}/>
        <button>Add new post</button>
        <button>Remove</button>
    </form>
}

const AddNewPostRedux = reduxForm({form: "profileAddNewPost"})(AddNewPost)

export default MyPosts;
