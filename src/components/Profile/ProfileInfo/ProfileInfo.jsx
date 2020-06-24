import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader.jsx';
import ProfileStatus from './ProfileStatus/ProfileStatus.jsx';

const ProfileInfo = (props)=>{
  if (props.profile==null)
    return <Preloader />;

  let p = props.profile;
  let photoUrl = p.photos == null
    ? "#"
    :p.photos.large;
    
  return (<div className={s.container}>
  {/*<div className={s.backgroundContainer}>
    <img className={s.background} src="https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_nad_rekoj_zakat_zagoralsya_ki200103.jpg" alt="Background"></img>
  </div>*/}
  <div>
    <img alt="background" className={s.img} src={photoUrl}/>
    <ProfileStatus status="Hi here" />
  </div>
  <div>
    {props.profile.fullName}
  </div>
  <div className={s.description}>
    {p.aboutMe}<br/>
    {p.lookingForAJob}
  </div>
  <div className={s.contacts}>
    FaceBook {p.contacts.facebook}<br/>
    WebSite {p.contacts.website}<br/>
    VK {p.contacts.vk}<br/>
    Twitter {p.contacts.twitter}<br/>
    Instagram {p.contacts.instagram}<br/>
  </div>
</div>
  )
}

export default ProfileInfo;