import React from 'react';
import s from './ProfileDataForm.module.css';
import {createField,Input,Textarea} from '../../Common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';

const ProfileContactsForm = ({handleSubmit, profile, error}) => {
  return  <form onSubmit={handleSubmit}>
  <div>
    <b>Full name</b>:
    {createField("Full name", "fullName", [], Input)}
  </div>

  <div className={s.description}>
    <div>
      <b>Looking for a job</b>:
      {createField("","lookingForAJob",[],Input,{type: "checkbox"})}
    </div>
    <div>
      <b>My professional skills</b>:
      {createField("My professional skills","lookingForAJobDescription",[],Textarea)}
    </div>
    <div>
      <b>About me</b>: 
      {createField("About me","aboutMe",[],Textarea)}
    </div>
  </div>


  <div className={s.contacts}>
    <h3>Contacts</h3>
      {
        Object.keys(profile.contacts).map(key => {
          return <div key={key}>
              <b>{key}</b>: {createField(key,"contacts."+key,[],Input)}
            </div>
        })
      }
  </div>

  <div><button>save</button></div>

  {error && <div className={s.error}>{error}</div>}

  </form>
}

const ProfileContactsReduxForm = reduxForm({form: "edit-profile"})(ProfileContactsForm);

export default ProfileContactsReduxForm;