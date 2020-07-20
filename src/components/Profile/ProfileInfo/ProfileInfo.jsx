import React,{useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader.jsx';
import ProfileStatusHooks from './ProfileStatus/ProfileStatusHooks.jsx';
import userPhoto from '../../../assets/images/userIcon.png';
import ProfileDataForm from './ProfileDataForm';
import ProfileData from './ProfileData';

const ProfileInfo = ({profile,status,updateStatus,isOwner,savePhoto, saveProfile})=>{

  let [editMode,setEditMode] = useState(false);

  if (profile==null)
    return <Preloader />;

  let p = profile;

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length){
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(()=>{
      setEditMode(false); 
    });    
  }
  
  return (<div className={s.container}>
  <div>
    <img alt="background" className={s.img} src={p.photos.large || userPhoto}/>
    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
    <ProfileStatusHooks status={status} updateStatus={updateStatus} />
  </div>

  <div className={s.contacts}>
    { editMode 
      ? <ProfileDataForm
          initialValues={p}
          profile={p}
          onSubmit={onSubmit}
        />
      : <ProfileData
          profile={p}
          isOwner={isOwner}
          goToEditMode={()=>{setEditMode(true)}}
        />
    }
  </div>

</div>
  )
}

export default ProfileInfo;