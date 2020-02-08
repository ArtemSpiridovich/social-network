import React from 'react';
import s from "./users.module.css"
import * as axios from "axios";
import avatar from './../../assets/images/user-5.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}")
            .then(responce => {
                this.props.setUsers(responce.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++){
            pages.push(i)
        }

        return <div>
            <div>
                {
                    pages.map(i => {
                        return <span className={this.props.currentPage === i && s.selectedPage}>{i}</span>
                    })
                }
            </div>
            {
                this.props.users.map(u => <div className={s.content} key={u.id}>
                <span>
                    <div className={s.photo}>
                        <img src={u.photos.small != null ? u.photos.small : avatar}/>
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>unFollow</button>
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
    }
}


export default Users