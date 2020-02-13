import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching, toogleFollowingInProgress,
    unfollow
} from "../../redux/Users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })
    }

    setNewCurrentPage = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
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
                         followingInProgress={this.props.followingInProgress}/>
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

const MyUsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage,
    setTotalCount, toggleIsFetching, toogleFollowingInProgress})(UsersContainer)

export default MyUsersContainer;