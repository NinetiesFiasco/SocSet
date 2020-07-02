import {createStore, combineReducers,applyMiddleware} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navigationReducer from './navigationReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  navigationReducer,
  usersReducer,
  authReducer,
  form: formReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;