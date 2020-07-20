import {authAPI, securityAPI} from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const GET_CAPTCHA_URL_SUCCES = "GET_CAPTCHA_URL_SUCCES";


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null // if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {  
  switch (action.type){
    case SET_AUTH_USER_DATA:      
      return {
        ...state,
        ...action.data
      }

    case GET_CAPTCHA_URL_SUCCES:
      return {
        ...state,
        captchaUrl: action.captchaUrl
      }

    default: return state;
  }
}

export const setAuthUserData = (userId,email,login, isAuth) => ({type: SET_AUTH_USER_DATA,data:{userId,email,login,isAuth}});
export const getCaptchaUrlSuccess = (captchaUrl)=>({type: GET_CAPTCHA_URL_SUCCES, captchaUrl})

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  
  if (response.data.resultCode ===0 ){
    let {id, login, email} = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email,password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.login(email,password,rememberMe,captcha);

  if (response.data.resultCode ===0 ){
    dispatch(getAuthUserData());
  } else {
    let message = response.data.messages.length > 0
      ?response.data.messages[0]
      :"Some error";
    dispatch(stopSubmit('login',{_error: message}));
    if (response.data.resultCode === 10)
      dispatch(getCaptchaUrl());
  }      
}

export const getCaptchaUrl = () => async (dispatch) => {
  let response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  
  if (response.data.resultCode ===0 ){
    dispatch(setAuthUserData(null, null, null, false));
  }
}

 
export default authReducer;