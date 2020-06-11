import React from 'react';
import s from './Messages.module.css';

const Message = (props) =>{
  return(
    <div className={s.message}>{props.txt}</div>
  )
}

export default Message;