import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

function Header(props){
  return (
<header className={s.header}>
  <img alt="Logo" src="https://ru.reactjs.org/logo-og.png"/>
  <div className={s.loginBlock}>
    {
      props.isAuth
        ?props.login+" "+props.email
        :<NavLink to={'/login'}>Login</NavLink>
    }
  </div>
</header>)
}

export default Header;