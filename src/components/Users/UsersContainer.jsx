import {connect} from 'react-redux';
import Users from './Users.jsx';
import React from 'react';
import Preloader from '../Common/Preloader/Preloader.jsx'; 

import {
  follow,
  unfollow,  
  getUsers
} from '../../redux/usersReducer.js'; 

class UsersContainer extends React.Component{

  constructor(props){
    super(props);
    this.onPageChanged = this.onPageChanged.bind(this);
  }

  componentDidMount(){
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged(p){
    this.props.getUsers(p, this.props.pageSize);
  }

  render(){
    return this.props.isFetching
              ? <Preloader />
              :<Users
                totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                onPageChanged = {this.onPageChanged}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                users = {this.props.users}
                isFetching = {this.props.isFetching}             
                followingInProgress = {this.props.followingInProgress}
              />
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    followingInProgress: state.usersReducer.followingInProgress
  }
}

export default connect(mapStateToProps,
  {follow,unfollow,getUsers}
)(UsersContainer);