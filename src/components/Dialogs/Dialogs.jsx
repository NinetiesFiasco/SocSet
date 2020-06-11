import React from 'react';
import s from './Dialogs.module.css';
import Message from './Messages/Messages.jsx';
import User from './User/User.jsx';


function Dialogs(props){

  let usersUI = props.state.users.map((usr,key) => <User key={key} id={usr.id} name={usr.name} />);
  let messagesUI = props.state.messages.map((msg,key) => <Message key={key} txt={msg.txt}/>);

  return (
<div className={s.dialogs}>
  <div className={s.dialogsItems}>
    {usersUI}
  </div>
  <div className={s.messages}>
    {messagesUI}
  </div>
</div>)
}

export default Dialogs;