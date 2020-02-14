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

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setNewCurrentPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    };

    render() {
        return <div>
            {this.props.isFetching
                ? <Preloader/>
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         users={this.props.users}
                         unfollow={this.props.unfollow}
                         follow={this.props.follow}
                         setNewCurrentPage={this.setNewCurrentPage}
                         toogleFollowingInProgress={this.props.toogleFollowingInProgress}
                         followingInProgress={this.props.followingInProgress}
                         getUsers={this.props.getUsers}/>
            }
        </div>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
