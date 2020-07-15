import { createSelector } from "reselect";

export const getUsers = (state) => {
  return state.usersReducer.users;
} 
export const getUsersSelector = (state) => {
  return getUsers(state).filter(u => true);
} 

export const getUsersSuper = createSelector(getUsers,
  (users) => {
    return users.filter(u => true);
  }
);

export const getPageSize = (state) => {
  return state.usersReducer.pageSize;
}

export const getTotalUsersCount = (state) => {
  return state.usersReducer.totalUsersCount;
}

export const getCurrentPage = (state) => {
  return state.usersReducer.currentPage;
}

export const getIsFetching = (state) => {
  return state.usersReducer.isFetching;
}

export const getFollowingInProgress = (state) => {
  return state.usersReducer.followingInProgress;
}
/*
export const countSomethingDifficult = (state) => {
  //for... math... big arrays =)
  let count = 23;
  return count;
}*/