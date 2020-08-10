import { PostType,ProfileType,PhotosType } from './../types/types';
import { usersAPI,profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const prfx = (v:string):string => "SocSet/profile/"+v;

const ADD_POST = prfx("ADD-POST");
const SET_USER_PROFILE = prfx("SET_USER_PROFILE");
const SET_STATUS = prfx("SET_STATUS");
const DELETE_POST = prfx("DELETE_POST");
const SAVE_PHOTO_SUCCESS = prfx("SAVE_PHOTO_SUCCESS");

let initialState = {
  posts: [
    {id: 0,likesCount:12, txt : "Look at my photo"},
    {id: 1,likesCount:2, txt : "It`s my first post"},
    {id: 2,likesCount:1, txt : "Please like me"},
    {id: 3,likesCount:7, txt : "Call me may be"},
    {id: 4,likesCount:3, txt : "i'm wait"}
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: "",
  newPostValue: ""
};

export type InitialStateType = typeof initialState;

const profileReducer = (state:InitialStateType = initialState, action:any):InitialStateType => {
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
      return {...state, profile: {...state.profile, photos: action.photos} as ProfileType }
    default: return {...state};
  }
}

export default profileReducer; 

export type AddPostActionCreatorType = {
  type: typeof ADD_POST,
  newPostText: string
}
export type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType
}
export type SetStatusActionType = {
  type: typeof SET_STATUS,
  status: string
}
export type DeletePostActionType = {
  type: typeof DELETE_POST,
  postId: number
}

export type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS,
  photos: PhotosType
}


export const addPostActionCreator = (newPostText:string):AddPostActionCreatorType => ({type: ADD_POST,newPostText});
export const setUserProfile = (profile:ProfileType):SetUserProfileActionType => ({type: SET_USER_PROFILE,profile});
export const setStatus = (status:string):SetStatusActionType => ({type: SET_STATUS, status});
export const deletePost = (postId:number):DeletePostActionType => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos:PhotosType):SavePhotoSuccessActionType =>({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId:number) => async (dispatch:any) => {
  let response = await  usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
}
export const getStatus = (userId:number) => async (dispatch:any) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
}
export const updateStatus = (status: string) => async (dispatch:any) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0)
    dispatch(setStatus(status));
}
export const savePhoto = (photo: any) => async (dispatch:any) => {
  let response = await profileAPI.savePhoto(photo);
  if (response.data.resultCode === 0)
    dispatch(savePhotoSuccess(response.data.data.photos));
}
export const saveProfile = (profile:any) => async (dispatch:any, getState:any) => {
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