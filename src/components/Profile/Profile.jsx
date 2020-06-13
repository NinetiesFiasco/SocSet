import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './myPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

function Profile(props){
  return (
    <div className={s.content}>
      <ProfileInfo  src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
      <MyPostsContainer />
  </div>   );
}

export default Profile;