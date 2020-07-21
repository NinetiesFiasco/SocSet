import React from 'react';
//import s from './ProfileData.module.css';

const ProfileData = ({profile,isOwner,goToEditMode}) => {
  return  <div>
    <div>    
      <b>Full name</b>:{profile.fullName}
    </div>

    <div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob &&
        <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>
      }
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
    </div>
    <h3>Contacts</h3>
      {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
      })
    }

    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
  </div>
}

const Contact = ({contactTitle, contactValue}) => {
  return <div><b>{contactTitle}</b>:{contactValue}</div>
}

export default ProfileData;