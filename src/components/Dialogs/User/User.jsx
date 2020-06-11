import {NavLink} from 'react-router-dom';
import React from 'react';
import s from './User.module.css';


function User(props){
  return (
    <div className={s.user}>
      <NavLink to={"/dialogs/"+props.id} activeClassName={s.activeLink}>{props.name}</NavLink>
    </div>)
}

export default User;