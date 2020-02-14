import React, {Component} from "react";

class ProfileStatus extends Component {

    state = {
        statusValue: '',
        editMode: false
    }

    editStatus = () => {
        debugger
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (<div>{this.state.editMode
                ? <div>
                    <input autoFocus={true} onBlur={this.editStatus} placeholder='write your status...'/>
                </div> :
                <div >
                    <span onDoubleClick={this.editStatus}>{this.props.status}</span>
                </div>
                }</div>
        )
    }
}

export default ProfileStatus