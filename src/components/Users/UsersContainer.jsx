import {connect} from 'react-redux';
import Users from './Users.jsx';
import React from 'react';
import Preloader from '../Common/Preloader/Preloader.jsx'; 
import {getUsers} from '../../api/api';
import {
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  setIsFetching,
  toggleIsFollowingProgress
} from '../../redux/usersReducer.js'; 

class UsersContainer extends React.Component{

  constructor(props){
    super(props);
    this.onPageChanged = this.onPageChanged.bind(this);
  }

  componentDidMount(){
    this.setUsers(this.props.currentPage);
  }

  setUsers(page){
    this.props.setIsFetching(true);

    getUsers(this.props.currentPage,this.props.pageSize).then(data =>{
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount)
      this.props.setIsFetching(false);
    });
  } 

  onPageChanged(p){
    this.props.setCurrentPage(p);
    this.setUsers(p);  
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
                toggleIsFollowingProgress = {this.props.toggleIsFollowingProgress}              
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
  {follow,unfollow,setUsers,setTotalUsersCount,setCurrentPage,setIsFetching,toggleIsFollowingProgress}
)(UsersContainer);