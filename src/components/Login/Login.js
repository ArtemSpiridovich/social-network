import React from "react";
import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import {Input} from "../../common/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const maxLength35 = maxLengthCreator(35);
const maxLength20 = maxLengthCreator(20)

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="email" name="email" component={Input} validate={[requiredField, maxLength35]} type="text" />
        </div>
        <div>
            <Field placeholder="password" name="password" type='password' component={Input} validate={[requiredField, maxLength20]}/>
        </div>
        <div>
            <Field name="rememberMe" component={Input} type="checkbox" />remember me
        </div>
        {props.error && <span className={s.formSummaryError}>
            {props.error}
        </span>}
        <div>
            <button>Login</button>
        </div>
    </form>
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        return props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div className={s.loginForm}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)