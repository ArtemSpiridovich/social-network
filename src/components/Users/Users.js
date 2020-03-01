import React from "react";
import s from "./users.module.css";
import User from "./User";
import Pagination from "./Pagination";
import Preloader from "../../common/Preloader";

const Users = ({follow, unfollow, followingInProgress,...props}) => {
    return <div>
        <Pagination {...props}/>
        {props.isFetching ? <Preloader/> :
        <div>{
            props.users.map(u => <User u={u}
                                       key={u.id}
                                       follow={follow}
                                       unfollow={unfollow}
                                       followingInProgress={followingInProgress}/>)
        }</div>}
    </div>
};

export default Users