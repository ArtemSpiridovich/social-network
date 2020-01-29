import React from 'react';
import s from "./users.module.css"

const Users = (props) => {
    if(props.users.length===0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(responce => {
            props.setUsers(responce)
        })

    }
    return <div >
        {
            props.users.map(u => <div className={s.content} key={u.id}>
                <span>
                    <div className={s.photo}>
                        <img src={u.photoURL}/>
                    </div>
                    <div>
                        {
                            u.followed
                        ?<button onClick={() => {props.unfollow(u.id) } }>Follow</button>
                        :<button onClick={() => {props.follow(u.id) } }>unFollow</button>
                        }
                    </div>
                </span>
                <span className={s.text}>
                    <span>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.location.country}
                        </div>
                        <div>
                            {u.location.city}
                        </div>
                    </span>
                </span>
            </div>)
        }
        <button className={s.showmore}>Show more</button>
    </div>
}

export default Users