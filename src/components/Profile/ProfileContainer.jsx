import React from 'react';
import Profile from './Profile.jsx';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer.js';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    debugger;
    let id = this.props.match.params.id;
    if (!id) 
      id=2
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response =>{
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return (
      <Profile {...this.props} />);
  }
}

let mstp = (state) => {return {
  profile: state.profileReducer.profile
}};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mstp,{
  setUserProfile
})(WithUrlDataContainerComponent);