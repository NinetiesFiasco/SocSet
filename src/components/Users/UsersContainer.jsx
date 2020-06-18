import {connect} from 'react-redux';
import Users from './Users.jsx';
import React from 'react';
import * as axios from 'axios';
import Preloader from '../Common/Preloader/Preloader.jsx'; 
import {
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  setIsFetching
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
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize }`).then(response =>{
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount)
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
              />
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching
  }
}

export default connect(mapStateToProps,
  {follow,unfollow,setUsers,setTotalUsersCount,setCurrentPage,setIsFetching}
)(UsersContainer);