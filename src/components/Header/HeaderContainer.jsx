import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logout} from '../../redux/authReducer';

class HeaderContainer extends React.Component{
  render(){
    return <Header { ...this.props } />
  }
}

const mstp = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
    email: state.authReducer.email,
  }
}

export default connect(mstp,{logout})(HeaderContainer);