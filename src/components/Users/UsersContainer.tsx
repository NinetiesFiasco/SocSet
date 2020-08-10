import {connect} from 'react-redux';
import Users from './Users';
import React from 'react';
import Preloader from '../Common/Preloader/Preloader.jsx'; 

import {
  follow,
  unfollow,
  getUsers
} from '../../redux/usersReducer';
import { compose } from 'redux';
import { getPageSize, getUsersSuper, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/usersSelector';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/reduxStore';

type MapStatePropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  isFetching: boolean
  users: Array<UserType>  
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  follow: (id:number)=>any
  unfollow: (id:number)=>void
  getUsers: (currentPage:number,pageSize:number)=>void
}

type OwnPropsType = {
  onPageChanged: ()=>void
  pageTitle: string
}

type PropsType =  MapStatePropsType & MapDispatchPropsType &  OwnPropsType


class UsersContainer extends React.Component<PropsType>{

  constructor(props:PropsType){
    super(props)
    this.onPageChanged = this.onPageChanged.bind(this)
  }

  componentDidMount(){
    let {currentPage,pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged(page:number){
    let {pageSize} = this.props;
    this.props.getUsers(page, pageSize);
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
                followingInProgress = {this.props.followingInProgress}
              />
      
    
  }
}

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
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
  connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,AppStateType>(
    mapStateToProps,
    {follow,unfollow,getUsers}
  )
)(UsersContainer);