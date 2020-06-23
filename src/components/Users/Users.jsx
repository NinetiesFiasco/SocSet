import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/userIcon.png';
import {NavLink} from 'react-router-dom';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  let pagesUI;
  let curPage = props.currentPage;

  for (var i = curPage - 17; i <= curPage + 17; i++)
    if (i >= 1 && i <= pagesCount)
      pages.push(i);

  pagesUI = pages.map(p => {
    return <span
      key={p}
      onClick={() => { props.onPageChanged(p) }}
      className={s.defaultPage + " " + (curPage === p ? s.currentPage : "")}
    >{p}</span>
  });

  return (
    <div className={s.content}>
      <div>
        <span onClick= {() => { props.onPageChanged(1) }} className={s.defaultPage}>{"<<"}</span>
        {pagesUI}
        <span onClick={() => { props.onPageChanged(pagesCount) }} className={s.defaultPage}>{">>"}</span>
      </div>
      {
        props.users.map(u => {
          return <div key={u.id}>
            <span>
              <div>
                <NavLink to={"/profile/"+u.id}>
                  <img className={s.avatar} src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" />
                </NavLink>
              </div>
              <div>
                {
                  u.followed
                    ? <button 
                        disabled={props.followingInProgress.some(id => id===u.id)} 
                        onClick={() => {props.unfollow(u.id)}}
                      >Unfollow</button> 
                    : <button 
                        disabled={props.followingInProgress.some(id => id===u.id)} 
                        onClick={()=>{props.follow(u.id)}}
                      >Follow</button>
                }
              </div>
            </span>  
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        })
      }
    </div>)
}


export default Users;