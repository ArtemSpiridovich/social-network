import React from 'react';
import s from "./users.module.css"

const Users = (props) => {
    if(props.users.length===0) {
        props.setUsers([{
                id: 1,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsd6IhKO_brDHW6yj-OkYLBt4bzOhpOBn9mvHfBN6qyMk4r7yfjw&s',
                followed: true,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
                {
                    id: 2,
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsd6IhKO_brDHW6yj-OkYLBt4bzOhpOBn9mvHfBN6qyMk4r7yfjw&s',
                    followed: true,
                    fullName: 'Sveta',
                    status: 'I am a girl',
                    location: {city: 'Moskow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsd6IhKO_brDHW6yj-OkYLBt4bzOhpOBn9mvHfBN6qyMk4r7yfjw&s',
                    followed: false,
                    fullName: 'Victor',
                    status: 'I am a teacher',
                    location: {city: 'Kiev', country: 'Ukrain'}
                },
                {
                    id: 4,
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsd6IhKO_brDHW6yj-OkYLBt4bzOhpOBn9mvHfBN6qyMk4r7yfjw&s',
                    followed: false,
                    fullName: 'Katya',
                    status: 'I am a women',
                    location: {city: 'London', country: 'England'}
                }
            ]
        )
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