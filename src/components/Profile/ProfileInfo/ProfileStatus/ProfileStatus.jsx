import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component{

  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
      status: this.props.status
    });
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  }

  render(){
  return (<div className={s.statusContainer}>
      {!this.state.editMode
      ?(<div>
          <span onDoubleClick={this.activateEditMode}>{this.props.status?this.props.status:"No status"}</span>
        </div>)
      :(<div>
          <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
        </div>)
      }
    </div>)
  }
}

export default ProfileStatus;