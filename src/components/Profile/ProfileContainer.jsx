import React from 'react';
import Profile from './Profile.jsx';
import {connect} from 'react-redux';
import {getUserProfile,getStatus,updateStatus} from '../../redux/profileReducer.js';
import { withRouter } from 'react-router-dom';
//import { withAuthRedirect } from '../../hoc/WithAuthRedirect.js';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    // Это кажись with url возвращает в props параметры из url
    let id = this.props.match.params.id;  
    if (!id) {
      id=this.props.authorizedUserId
      
      if (!id){this.props.history.push("/login");}
    }
    this.props.getUserProfile(id);
    this.props.getStatus(id); 
  }

  render() {    
    return (
      <Profile {...this.props} />);
  }
}

let mstp = (state) => {return {
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  authorizedUserId: state.authReducer.userId,
  isAuth: state.authReducer.isAuth
}};

export default compose(
  connect(mstp,{getUserProfile,getStatus,updateStatus}),
  withRouter,
  //withAuthRedirect
)(ProfileContainer);
