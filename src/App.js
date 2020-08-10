import React from 'react';
import {Route, withRouter, Redirect} from 'react-router-dom';
import './App.css';

import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

import Header from './components/Header/HeaderContainer';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/ProfileContainer';
import Users from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from './redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/Preloader';
import { withSuspense } from './hoc/WithSuspense';

//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

class App extends React.Component {

  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("Some error occured");
    console.error('myErrHnd: ',promiseRejectionEvent);
  }

  componentDidMount(){
    this.props.initializeApp();
    window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors);    
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors);
  }


  render() {
    if (!this.props.initialized){
      return <div><h1>Load</h1><Preloader /></div>
    }
    return (
      <div className="app-wrapper">
        <Header/>
        <Navigation/>
        <div className="mainContent">

          <Route path="/dialogs"
              render={ withSuspense(DialogsContainer) }/>
          <Route path="/profile/:id" 
              render={()=><Profile/>}/>
          <Route path="/profile" 
              render={()=><Profile/>} exact/>
          <Route path="/settings" 
              render={ withSuspense(Settings) }/>
          <Route path="/music" 
              render={ withSuspense(Music)}/>
          <Route path="/users" 
              render={()=><Users pageTitle="Test Test Test"/>}/>
          <Route path="/news" 
              render={ withSuspense(News)}/>
          <Route path="/login" 
              render={()=><Login/>}/>
          <Route path="/" exact
              render={()=><Redirect to="/profile"/>}/>
        </div>
      </div>
    );
  }
}

let mstp = (state) => {
  return {
    initialized: state.appReducer.initialized
  }
}

let AppContainer = compose(
  withRouter,
  connect(mstp,{initializeApp})
)(App);

let SamuraiJSApp = (props) => {
  return(
  <BrowserRouter>
    <Provider store={store}> 
      <AppContainer/>
    </Provider>
  </BrowserRouter>);
}

export default SamuraiJSApp;