import {connect} from 'react-redux';
import Users from './UsersC';
import {followAC,unfollowAC,setUsersAC,setTotalUsersCountAC, setCurrentPage} from '../../redux/usersReducer.js';

let mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage    
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setTotalUsersCount: (count) =>{
      dispatch(setTotalUsersCountAC(count));
    },
    setCurrentPage: (number)=>{
      dispatch(setCurrentPage(number));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);