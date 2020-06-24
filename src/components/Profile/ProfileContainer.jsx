import React from 'react';
import Profile from './Profile.jsx';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profileReducer.js';
import { withRouter } from 'react-router-dom';
//import { withAuthRedirect } from '../../hoc/WithAuthRedirect.js';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    // Это кажись with url возвращает в props параметры из url
    let id = this.props.match.params.id;  
    if (!id) 
      id=2

    this.props.getUserProfile(id);
  }

  render() {    
    return (
      <Profile {...this.props} />);
  }
}

let mstp = (state) => {return {
  profile: state.profileReducer.profile,
  isAuth: state.authReducer.isAuth
}};

export default compose(
  connect(mstp,{getUserProfile}),
  withRouter,
  //withAuthRedirect
)(ProfileContainer);


/*
let mstpForRedirect = (state) => {return {
  isAuth: state.authReducer.isAuth
}};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
AuthRedirectComponent = connect(mstpForRedirect,{})(AuthRedirectComponent);


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
  

export default connect(mstp,{
  getUserProfile
})(WithUrlDataContainerComponent);*/