import React from 'react';
import Dialogs from './Dialogs.jsx';
import {sendMessageCreator,updateNewMessageCreator} from '../../redux/dialogsReducer.js';
import StoreContext from '../../StoreContext.js';

function DialogsContainer(props){
    return (<StoreContext.Consumer>{(store)=>{
      
      let state = store.getState();
      let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator());
      }

      let onNewMessageChange = (body) =>{
        store.dispatch(updateNewMessageCreator(body));
      }

      return <Dialogs
            onSendMessageClick={onSendMessageClick}
            onNewMessageChange={onNewMessageChange}
            newMessageBody={state.dialogsReducer.newMessageBody}
            users = {state.dialogsReducer.users}
            messages = {state.dialogsReducer.messages}
      />
    }}
    </StoreContext.Consumer>
  )
}


export default DialogsContainer;