import React from "react";
import s from "./users.module.css";
import avatar from './../../assets/images/user-5.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {toogleFollowingInProgress} from "../../redux/Users-reducer";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {
                pages.map(i => {
                    return <span onClick={() => {
                        props.setNewCurrentPage(i)
                    }} className={props.currentPage === i && s.selectedPage}>{i}</span>
                })
            }
        </div>
        {
            props.users.map(u => <div className={s.content} key={u.id}>
                <span>
                    <div className={s.photo}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : avatar}/>
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed
                                ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toogleFollowingInProgress(true, u.id)
                                    usersAPI.unfollowUser(u.id).then(response => {
                                        if (response.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toogleFollowingInProgress(false, u.id)
                                    })
                                }}>
                                    unFollow
                                </button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toogleFollowingInProgress(true, u.id)
                                    usersAPI.followUser(u.id).then(response => {
                                        if (response.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toogleFollowingInProgress(false, u.id)
                                    })
                                }}>
                                    Follow
                                </button>
                        }
                    </div>
                </span>
                <span className={s.text}>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {'u.location.country'}
                        </div>
                        <div>
                            {'u.location.city'}
                        </div>
                    </span>
                </span>
            </div>)
        }
        <button className={s.showmore}>Show more</button>
    </div>
};

export default Users