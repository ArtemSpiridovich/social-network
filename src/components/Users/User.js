import React from "react";
import s from "./users.module.css";
import avatar from './../../assets/images/user-5.png'
import {NavLink} from "react-router-dom";

const User = ({u, followingInProgress, follow, unfollow}) => {
    return <div>
        <div className={s.content} key={u.id}>
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
                                <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                    unfollow(u.id)
                                }}>
                                    unFollow
                                </button>
                                :
                                <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                    follow(u.id)
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
            </div>
    </div>
};

export default User