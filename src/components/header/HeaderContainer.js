import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setUserData, authAccaunt} from "../../redux/authReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authAccaunt()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({state: state.auth})

export default connect(mapStateToProps, {setUserData, authAccaunt})(HeaderContainer)