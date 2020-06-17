import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navigationReducer from './navigationReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
  profileReducer:profileReducer,
  dialogsReducer:dialogsReducer,
  navigationReducer:navigationReducer,
  usersReducer:usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;