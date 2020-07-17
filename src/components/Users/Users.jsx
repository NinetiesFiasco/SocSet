import React from 'react';
import s from './Users.module.css';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';

let Users = (props) => {
  
  return (    
    <div className={s.content}>
      <Paginator {...props}  />
      {props.users.map(u => {
          return <User  key={u.id} 
                        user={u} 
                        followingInProgress={props.followingInProgress} 
                        follow = {props.follow} 
                        unfollow = {props.unfollow}                  
                  />
      })}
    </div>)
}


export default Users;