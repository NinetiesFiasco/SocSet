import Dialogs from './Dialogs.jsx';
import {sendMessageCreator,updateNewMessageCreator} from '../../redux/dialogsReducer.js';
import {connect} from 'react-redux';

let mapStateToProps = (state)=>{
  return{
    newMessageBody:state.dialogsReducer.newMessageBody,
    users: state.dialogsReducer.users,
    messages: state.dialogsReducer.messages
  };
}
let mapDispatchToProps = (dispatch)=>{
  return {
    onNewMessageChange: (body)=>{
      dispatch(updateNewMessageCreator(body));
    },
    onSendMessageClick: ()=>{
      dispatch(sendMessageCreator());
    }
  }
}

const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default SuperDialogsContainer;