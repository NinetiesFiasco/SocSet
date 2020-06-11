import React from 'react';
import s from './Profile.module.css';
import MyPosts from './myPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

function Profile(props){
  return (
    <div className={s.content}>
      <ProfileInfo  src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
    <MyPosts state={props.state} dispatch={props.dispatch} />
  </div>   );
}

export default Profile;