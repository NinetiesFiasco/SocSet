import React from 'react';
import s from './Links.module.css';
import {NavLink} from 'react-router-dom';

function Links(props){
  return (
    <div className={s.item}>
      <NavLink activeClassName={s.activeLink} to={props.to}>{props.txt}</NavLink>
    </div>
    )
}

export default Links;