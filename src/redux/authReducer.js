
const SET_USER_DATA = "SET_USER_DATA";

export const setUserData = (data) => ({type: SET_USER_DATA,data});

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_USER_DATA:
      return {
        ...state,      
        ...action.data
      }

    default: return state;    
  }
}

export default authReducer;