import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './myPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

function Profile(props){
  return (
    <div className={s.content}>
      <ProfileInfo 
        profile={props.profile} 
        status={props.status} 
        updateStatus={props.updateStatus} 
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
  </div>   );
}

export default Profile;