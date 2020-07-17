import {usersAPI,profileAPI} from '../api/api';

const ADD_POST = "SocSet/profile/ADD-POST";
const SET_USER_PROFILE = "SocSet/profile/SET_USER_PROFILE";
const SET_STATUS = "SocSet/profile/SET_STATUS";
const DELETE_POST = "SocSet/profile/DELETE_POST";

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
    
    default: return {...state};
  }
}

export default profileReducer; 


export const addPostActionCreator = (newPostText) => ({type: ADD_POST,newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE,profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});


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