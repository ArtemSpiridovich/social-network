import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/Profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    componentDidUpdate(prevProps) {
        debugger
        // Typical usage (don't forget to compare props):
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            if (!this.props.match.params.userId) {
                this.props.match.params.userId = 2;
            }
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + this.props.match.params.userId)
                .then(response => {
                    this.props.setUserProfile(response.data)
                })
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithRouterProfileContainer)