import React from 'react';

const Users = (props) => {
    return <div>
        {
            props.state.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img/>
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </span>
                <span>
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

                        </div>
                        <div>

                        </div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users