import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage, toogleFollowingInProgress,
    unfollow
} from "../../redux/Users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/AuthRedirectHOC";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPagesize,
    getTotalUsersCount,
    getUsersState
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setNewCurrentPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    };

    render() {
        return <div>
            {/*{this.props.isFetching ? <Preloader/> : ''}*/}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   setNewCurrentPage={this.setNewCurrentPage}
                   toogleFollowingInProgress={this.props.toogleFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}
                   getUsers={this.props.getUsers}
                   isFetching={this.props.isFetching}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersState(state),
        pageSize: getPagesize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toogleFollowingInProgress,
        getUsers
    }),
    withAuthRedirect,
)(UsersContainer)
