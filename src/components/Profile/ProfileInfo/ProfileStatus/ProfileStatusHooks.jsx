import React, {useState,useEffect} from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusHooks = (props) => {
  
  let [editMode,setEditMode] = useState(false);   
  let [status,setStatus] = useState(props.status);

  useEffect(()=>{
    setStatus(props.status);
  },[props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
<div className={s.statusContainer}>
  {!editMode &&
    <div>
      <span onDoubleClick={activateEditMode} >{props.status?props.status:"No status"}</span>
    </div>
  }
  {editMode && 
    <div>
      <input autoFocus={true} value={status} onBlur={deactivateEditMode} onChange={onStatusChange} />
    </div>
  }
</div>
  );
};

export default ProfileStatusHooks;