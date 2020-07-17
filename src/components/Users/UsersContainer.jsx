import {connect} from 'react-redux';
import Users from './Users.jsx';
import React from 'react';
import Preloader from '../Common/Preloader/Preloader.jsx'; 

import {
  follow,
  unfollow,
  getUsers
} from '../../redux/usersReducer.js'; 
import { compose } from 'redux';
import { getPageSize, getUsersSuper, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/usersSelector.js';

class UsersContainer extends React.Component{

  constructor(props){
    super(props);
    this.onPageChanged = this.onPageChanged.bind(this);
  }

  componentDidMount(){
    let {currentPage,pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged(p){
    let {pageSize} = this.props;
    this.props.getUsers(p, pageSize);
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
    users: getUsersSuper(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps,
    {follow,unfollow,getUsers}
  )
)(UsersContainer);