import Dialogs from './Dialogs.jsx';
import {sendMessageCreator} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect.js';
import { compose } from 'redux';

let mstp = (state)=>{
  return{
    newMessageBody:state.dialogsReducer.newMessageBody,
    users: state.dialogsReducer.users,
    messages: state.dialogsReducer.messages,
    isAuth: state.authReducer.isAuth
  };
}
let mdtp = (dispatch)=>{
  return {
    onSendMessageClick: (newMessageBody)=>{
      let action = sendMessageCreator(newMessageBody);
      dispatch(action);
    }
  }
}

export default compose(
  connect(mstp,mdtp),
  withAuthRedirect
)(Dialogs)
/*
let mstpForRedirect = (state)=>{
  return{
  };
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)
AuthRedirectComponent = connect(mstpForRedirect,{})(AuthRedirectComponent);

const SuperDialogsContainer = connect(mstp,mapDispatchToProps)(AuthRedirectComponent);

export default SuperDialogsContainer;*/