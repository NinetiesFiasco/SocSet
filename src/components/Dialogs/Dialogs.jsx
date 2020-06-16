import React from 'react';
import s from './Dialogs.module.css';
import Message from './Messages/Messages.jsx';
import User from './User/User.jsx';

function Dialogs(props){

  let usersUI = props.users.map((usr,key) => <User key={key} id={usr.id} name={usr.name} />);
  let messagesUI = props.messages.map((msg,key) => <Message key={key} txt={msg.txt}/>);
  
  let onSendMessageClick = () => {
    props.onSendMessageClick();
  }

  let onNewMessageChange = (e) =>{
    let body = e.target.value;
    props.onNewMessageChange(body);
  }
debugger;
  return (
<div className={s.dialogs}> 
  <div className={s.dialogsItems}>
    {usersUI}
  </div>
  <div className={s.messages}>
    <div>{messagesUI}</div>
    <div>
      <div><textarea onChange={onNewMessageChange} value={props.newMessageBody} placeholder="Enter your message"></textarea></div>
      <div><button onClick={onSendMessageClick}>Send</button></div>
    </div>
  </div>
</div>)
}

export default Dialogs;