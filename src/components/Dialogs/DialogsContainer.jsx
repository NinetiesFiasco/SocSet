import React from 'react';
import Dialogs from './Dialogs.jsx';
import {sendMessageCreator,updateNewMessageCreator} from '../../redux/dialogsReducer.js';

function DialogsContainer(props){
  let state = props.store.getState();

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (body) =>{
    props.store.dispatch(updateNewMessageCreator(body));
  }

  return (<Dialogs 
            onSendMessageClick={onSendMessageClick} 
            onNewMessageChange={onNewMessageChange} 
            newMessageBody={state.dialogsReducer.newMessageBody} 
            users = {state.dialogsReducer.users}
            messages = {state.dialogsReducer.messages}
          />)
}

export default DialogsContainer;