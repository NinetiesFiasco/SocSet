import {usersAPI,profileAPI} from '../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = "SocSet/profile/ADD-POST";
const SET_USER_PROFILE = "SocSet/profile/SET_USER_PROFILE";
const SET_STATUS = "SocSet/profile/SET_STATUS";
const DELETE_POST = "SocSet/profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SocSet/profile/SAVE_PHOTO_SUCCESS";

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
    case DELETE_POST:
      return {...state, posts: state.posts.filter((p)=>p.id!==action.postId)}
    case SAVE_PHOTO_SUCCESS:
      return {...state, profile: {...state.profile, photos: action.photos}}
    default: return {...state};
  }
}

export default profileReducer; 

export const addPostActionCreator = (newPostText) => ({type: ADD_POST,newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE,profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) =>({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await  usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0)
    dispatch(setStatus(status));
}
export const savePhoto = (photo) => async (dispatch) => {
  let response = await profileAPI.savePhoto(photo);
  if (response.data.resultCode === 0)
    dispatch(savePhotoSuccess(response.data.data.photos));
}
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().authReducer.userId;
  let response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0){
    dispatch(getUserProfile(userId));
  } else {    
     dispatch(stopSubmit('edit-profile',{ _error: response.data.messages[0]}));
     return Promise.reject(response.data.messages[0]);
    //dispatch(stopSubmit('edit-profile',{ "contacts":{"facebook": response.data.messages[0]}}));
  }
}