import { AppStateType } from './reduxStore';
import { createSelector } from "reselect";

export const getUsers = (state:AppStateType) => {
  return state.usersReducer.users;
} 
export const getUsersSelector = (state:AppStateType) => {
  return getUsers(state).filter((u:any) => true);
} 

export const getUsersSuper = createSelector(getUsers,
  (users) => {
    return users.filter((u:any) => true);
  }
);

export const getPageSize = (state:AppStateType) => {
  return state.usersReducer.pageSize;
}

export const getTotalUsersCount = (state:AppStateType) => {
  return state.usersReducer.totalUsersCount;
}

export const getCurrentPage = (state:AppStateType) => {
  return state.usersReducer.currentPage;
}

export const getIsFetching = (state:AppStateType) => {
  return state.usersReducer.isFetching;
}

export const getFollowingInProgress = (state:AppStateType) => {
  return state.usersReducer.followingInProgress;
}
/*
export const countSomethingDifficult = (state) => {
  //for... math... big arrays =)
  let count = 23;
  return count;
}*/