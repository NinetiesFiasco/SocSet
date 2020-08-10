import {usersAPI} from '../api/api';
import {updateObjectInArray} from '../utils/object-helpers';
import { UserType } from '../types/types';

let prfx = (v:string):string => "SocSet/users/"+v;

const FOLLOW = prfx("FOLLOW");
const UNFOLLOW = prfx("UNFOLLOW");
const SET_USERS = prfx("SET_USERS");
const SET_TOTAL_USERS_COUNT = prfx("SET_TOTAL_USERS_COUNT");
const SET_CURRENT_PAGE = prfx("SET_CURRENT_PAGE");
const SET_IS_FETCHING = prfx("SET_IS_FETCHING");
const TOGGLE_IS_FOLLOWING_PROGRESS = prfx("TOGGLE_IS_FOLLOWING_PROGRESS");

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 12,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // Array of users ids
};

type InitialStateType = typeof initialState;

const reducer = (state = initialState, action:any) => {
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
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress:
          action.isFollowing
              ?[...state.followingInProgress, action.userId]
              :state.followingInProgress.filter(id => id !== action.userId)
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

    default: return state;    
  }
}

type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  count : number
}
type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  number: number
}
type SetIsFetchingActionType = {
  type: typeof SET_IS_FETCHING
  isFetching: boolean
}
type FollowSuccessActionType = {
  type: typeof FOLLOW
  userId: number
}
type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW
  userId : number
}
type ToggleIsFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFollowing: boolean
  userId: number
}

export const setUsers = (users:Array<UserType>):SetUsersActionType => ({type: SET_USERS,users});
export const setTotalUsersCount = (count:number):SetTotalUsersCountActionType =>({type: SET_TOTAL_USERS_COUNT,count});
export const setCurrentPage = (number:number):SetCurrentPageActionType =>({type: SET_CURRENT_PAGE, number});
export const setIsFetching = (isFetching:boolean):SetIsFetchingActionType => ({type: SET_IS_FETCHING,isFetching});
export const followSuccess = (userId:number):FollowSuccessActionType => ({type: FOLLOW,userId});
export const unfollowSuccess = (userId:number):UnfollowSuccessActionType => ({type: UNFOLLOW,userId});
export const toggleIsFollowingProgress = (isFollowing:boolean,userId:number):ToggleIsFollowingProgressActionType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS,isFollowing,userId});

export const getUsers = (currentPage:number,pageSize:number) => async (dispatch:any) => {  
  dispatch(setIsFetching(true));
  dispatch(setCurrentPage(currentPage));

  let data = await usersAPI.getUsers(currentPage,pageSize);
  
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
  dispatch(setIsFetching(false));
}

const followUnfollowFlow = async (dispatch:any, id:number, apiMethod:any, actionCreator:any) => {
  dispatch(toggleIsFollowingProgress(true,id));
  let response = await apiMethod(id);
  if (response.data.resultCode === 0)
    dispatch(actionCreator(id));
  dispatch(toggleIsFollowingProgress(false,id));  
}

export const follow = (id:number) => async (dispatch:any) => {
  followUnfollowFlow(dispatch,id,usersAPI.follow.bind(usersAPI),followSuccess);
}


export const unfollow = (id:number) => async (dispatch:any) => {
  followUnfollowFlow(dispatch,id,usersAPI.unfollow.bind(usersAPI),unfollowSuccess);
}


export default reducer;