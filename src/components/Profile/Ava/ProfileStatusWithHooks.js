import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [statusValue, setstatusValue] = useState(props.status)
    const editStatusOn = () => {
        setEditMode(true)
    }
    const editStatusOff = () => {
        setEditMode(false)
        props.updateStatus(statusValue)
    }
    const updateInput = (e) => {
        setstatusValue(e.currentTarget.value)
    }
    useEffect(() => {
            setstatusValue(props.status)
        },
        [props.status])
    return (
        <div>
            {editMode
                ? <div>
                    <input onBlur={editStatusOff} onChange={updateInput} autoFocus={true}
                           placeholder='write your status...' value={statusValue}/>
                </div>
                : <div>
                    <span onDoubleClick={editStatusOn}>{props.status}</span>
                </div>}
        </div>
    )
}

export default ProfileStatusWithHooks