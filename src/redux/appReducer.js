import { getAuthUserData } from './authReducer';

const prfx = (val)=>"SocSet/app/"+val;

const SET_INITIALIZED = prfx("SET_INITIALIZED");

const initialState = {
  initialized: false,
};

export const initializedSuccess = () => ({type: SET_INITIALIZED});


const appReducer = (state = initialState, action) => {  
  switch (action.type){
    case SET_INITIALIZED:      
      return {
        ...state,
        initialized: true
      }

    default: return state;
  }
}

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  
  Promise.all([promise])
    .then(()=>{      
      dispatch(initializedSuccess());
    });
}
 
export default appReducer;