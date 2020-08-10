import { getAuthUserData } from './authReducer';

const prfx = (val:string)=>"SocSet/app/"+val;

const SET_INITIALIZED = prfx("SET_INITIALIZED");

export type InitialStateType = {
  initialized: boolean
}

const initialState: InitialStateType = {
  initialized: false
};

type initializedSuccessActionType = {
  type: typeof SET_INITIALIZED   
}

export const initializedSuccess = ():initializedSuccessActionType => ({type: SET_INITIALIZED});


const appReducer = (state = initialState, action:any):InitialStateType => {  
  switch (action.type){
    case SET_INITIALIZED:      
      return {
        ...state,
        initialized: true
      }

    default: return state;
  }
}

export const initializeApp = () => (dispatch:any) => {
  let promise = dispatch(getAuthUserData());
  
  Promise.all([promise])
    .then(()=>{      
      dispatch(initializedSuccess());
    });
}
 
export default appReducer;