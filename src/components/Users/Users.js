import React from "react";
import s from "./users.module.css";
import avatar from './../../assets/images/user-5.png'

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
                        <img src={u.photos.small !== null ? u.photos.small : avatar}/>
                    </div>
                    <div>
                        {
                            u.followed
                                ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }
                                }>
                                    Follow
                                </button>
                                :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }
                                }>
                                    unFollow
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