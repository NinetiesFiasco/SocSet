import React from 'react';
import s from './Users.module.css';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';
import { UserType } from '../../types/types';

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: Array<UserType>
  followingInProgress: Array<number>
  
  onPageChanged: (page:number)=>void
  follow: (id:number)=>void
  unfollow: (id:number)=>void
}

let Users: React.FC<PropsType> = ({totalUsersCount,pageSize,currentPage,users,onPageChanged,followingInProgress,follow,unfollow}) => {
  
  return (    
    <div className={s.content}>
      <Paginator totalUsersCount = {totalUsersCount} pageSize = {pageSize} currentPage = {currentPage} onPageChanged={onPageChanged}  />
      {users.map(u => {
          return <User  key={u.id} 
                        user={u} 
                        followingInProgress={followingInProgress} 
                        follow = {follow} 
                        unfollow = {unfollow}                  
                  />
      })}
    </div>)
}


export default Users;