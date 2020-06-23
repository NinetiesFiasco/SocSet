import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {login} from '../../redux/authReducer';

class HeaderContainer extends React.Component{

  componentDidMount(){
    this.props.login();
  }

  render(){
    return <Header { ...this.props } />
  }
}

const mstp = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    userLogin: state.authReducer.userLogin,
    email: state.authReducer.email,
  }
}

export default connect(mstp,{login})(HeaderContainer);