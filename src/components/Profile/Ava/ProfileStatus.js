import React, {Component} from "react";

class ProfileStatus extends Component {

    state = {
        statusValue: this.props.status === false ? this.props.status : 'status is empty',
        editMode: false
    }

    editStatusOn = () => {
        this.setState({
            editMode: !this.state.editMode,
            statusValue: this.props.status
        })
    }

    editStatusOff = () => {
        this.props.updateStatus(this.state.statusValue)
        this.setState({
            editMode: !this.state.editMode
        })
    }

    updateInput = (e) => {
        let newStatus = e.currentTarget.value
        this.setState({
            statusValue: newStatus
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                statusValue: this.props.status
            })
        }
    }

    render() {
        return (<div>{this.state.editMode
                ? <div>
                    <input onChange={this.updateInput} autoFocus={true} onBlur={this.editStatusOff} placeholder='write your status...' value={this.state.statusValue}/>
                </div> :
                <div >
                    <span onDoubleClick={this.editStatusOn}>{this.state.statusValue === '' ? "your status" : this.props.status}</span>
                </div>
                }</div>
        )
    }
}

export default ProfileStatus