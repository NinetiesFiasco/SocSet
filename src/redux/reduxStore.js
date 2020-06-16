import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navigationReducer from './navigationReducer';

let reducers = combineReducers({
  profileReducer:profileReducer,
  dialogsReducer:dialogsReducer,
  navigationReducer:navigationReducer
});

let store = createStore(reducers);

window.store = store;

export default store;