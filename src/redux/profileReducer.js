import {usersAPI,profileAPI} from '../api/api';

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    {id: 0,likesCount:12, txt : "Look at my photo"},
    {id: 1,likesCount:2, txt : "It`s my first post"},
    {id: 2,likesCount:1, txt : "Please like me"},
    {id: 3,likesCount:7, txt : "Call me may be"},
    {id: 4,likesCount:3, txt : "i'm wait"}
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST:{
      let newPost = {
        id: 5,
        txt: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        newPostValue: "",
        posts: [ ...state.posts, newPost ]
      }

    }
    case SET_USER_PROFILE:
      return {...state,profile:action.profile}
    case SET_STATUS:
      return {...state,status:action.status}

    default: return {...state};
  }
}

export default profileReducer; 


export const addPostActionCreator = (newPostText) => ({type: ADD_POST,newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE,profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
}
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data));
    }
  ); 
}
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0)
        dispatch(setStatus(status));
    }
  ); 
}