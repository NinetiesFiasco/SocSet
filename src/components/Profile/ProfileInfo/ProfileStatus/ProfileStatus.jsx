import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component{

  state = {
    editMode: false,
    title: 'Yo'
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  render(){
  return (<div className={s.statusContainer}>
      {!this.state.editMode
      ?(<div>
          <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        </div>)
      :(<div>
          <input autoFocus={true} onBlur={this.deactivateEditMode} defaultValue={this.props.status}/>
        </div>)
      }
    </div>)
  }
}

export default ProfileStatus;