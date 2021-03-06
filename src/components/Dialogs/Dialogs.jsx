import React from 'react';
import s from './Dialogs.module.css';
import Message from './Messages/Messages.jsx';
import User from './User/User.jsx';
import {reduxForm,Field} from 'redux-form';
import { Textarea } from '../Common/FormsControls/FormsControls';
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';

function Dialogs(props){
  let usersUI = props.users.map((usr,key) => <User key={key} id={usr.id} name={usr.name} />);
  let messagesUI = props.messages.map((msg,key) => <Message key={key} txt={msg.txt}/>);
  
  let addNewMessage = (values) => {
    props.onSendMessageClick(values.newMessageBody);
  }
 
  return (
<div className={s.dialogs}> 
  <div className={s.dialogsItems}>
    {usersUI}
  </div>
  <div className={s.messages}>
    <div>{messagesUI}</div>
    <AddMessageFormRedux onSubmit={addNewMessage} />
  </div>
</div>)
}

let lengthValidate = maxLengthCreator(20);

const AddMessageForm = (props) =>{
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field component={Textarea} validate={[requiredField,lengthValidate]} name="newMessageBody" placeholder="Enter your message" />
        </div>
        <div><button>Send</button></div>
      </div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;