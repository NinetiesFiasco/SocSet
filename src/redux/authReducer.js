import * as usersAPI from '../api/api';

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

export const setAuthUserData = (userId,email,userLogin) => ({type: SET_AUTH_USER_DATA,data:{userId,email,userLogin}});

let initialState = {
  userId: null,
  email: null,
  userLogin: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_AUTH_USER_DATA:      
      return {
        ...state,
        ...action.data,
        isAuth: true
      }

    default: return state;
  }
}

export const login = () => {
  return (dispatch) => {    
    usersAPI.login().then((data) => {
      let {id, login, email} = data;
      dispatch(setAuthUserData(id, email, login));
    });
  }
}
 
export default authReducer;