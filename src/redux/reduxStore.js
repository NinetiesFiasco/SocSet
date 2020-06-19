import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navigationReducer from './navigationReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  navigationReducer,
  usersReducer,
  authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;