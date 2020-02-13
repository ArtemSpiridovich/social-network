import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setUserData} from "../../redux/authReducer";
import {loginAPI} from "../../api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        loginAPI.authMe().then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data
                    this.props.setUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({state: state.auth})

export default connect(mapStateToProps, {setUserData})(HeaderContainer)