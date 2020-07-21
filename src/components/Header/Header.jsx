import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

function Header(props){
  return (
<header className={s.header}>
  <div className={s.loginBlock}>
    {      
      props.isAuth
        ?<div>{props.login+" "+props.email}<button onClick={props.logout}>Log out</button></div>
        :<NavLink to={'/login'}>Login</NavLink>
    }
  </div>
</header>)
}

export default Header;