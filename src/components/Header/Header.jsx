import React from 'react';
import s from './Header.module.css';


function Header(){
  return (
<header className={s.header}>
  <img alt="Logo" src="https://ru.reactjs.org/logo-og.png"/>
  <div className={s.loginBlock}></div>
</header>)
}

export default Header;