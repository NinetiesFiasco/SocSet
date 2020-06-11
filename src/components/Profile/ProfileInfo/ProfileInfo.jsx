import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props)=>{
  return(
<div>
  <div>
    <img alt="background" className={s.img} src={props.src}/>
  </div>
  <div className={s.description}>
    Ava + description
  </div>
</div>
  )
}

export default ProfileInfo;