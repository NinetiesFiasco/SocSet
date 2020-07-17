import {usersAPI} from '../api/api';
import {updateObjectInArray} from '../utils/object-helpers';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


let initialState = {
  users: [],
  pageSize: 12,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users,action.userId,'id',{followed: true})    
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users,action.userId,'id',{followed: false})
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.number
      }
      case SET_IS_FETCHING:
        return {
          ...state,
          isFetching: action.isFetching
        }
      case TOGGLE_IS_FOLLOWING_PROGRESS:
        return {
          ...state,
          followingInProgress:
            action.isFollowing
                ?[...state.followingInProgress, action.userId]
                :state.followingInProgress.filter(id => id !== action.userId)
              
        }

    default: return state;    
  }
}

export const followSuccess = (userId) => ({type: FOLLOW,userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW,userId}); 
export const setUsers = (users) => ({type: SET_USERS,users}); 
export const setTotalUsersCount = (count) =>({type: SET_TOTAL_USERS_COUNT,count});
export const setCurrentPage = (number) =>({type: SET_CURRENT_PAGE, number});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING,isFetching})
export const toggleIsFollowingProgress = (isFollowing,userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS,isFollowing,userId});

export const getUsers = (currentPage,pageSize) => async (dispatch) => {  
  dispatch(setIsFetching(true));
  dispatch(setCurrentPage(currentPage));

  let data = await usersAPI.getUsers(currentPage,pageSize);
  
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
  dispatch(setIsFetching(false));
}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(toggleIsFollowingProgress(true,id));
  let response = await apiMethod(id);
  if (response.data.resultCode === 0)
    dispatch(actionCreator(id));
  dispatch(toggleIsFollowingProgress(false,id));  
}

export const follow = (id) => async (dispatch) => {
  followUnfollowFlow(dispatch,id,usersAPI.follow.bind(usersAPI),followSuccess);
}


export const unfollow = (id) => async (dispatch) => {
  followUnfollowFlow(dispatch,id,usersAPI.unfollow.bind(usersAPI),unfollowSuccess);
}


export default reducer;