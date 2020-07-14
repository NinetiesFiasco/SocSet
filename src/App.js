import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/HeaderContainer.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/ProfileContainer.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import Users from './components/Users/UsersContainer.jsx';
import Default from './components/Default/Default.jsx';
import Login from './components/Login/Login.jsx';
import {connect} from 'react-redux';
import {initializeApp} from './redux/appReducer';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount(){
    this.props.initializeApp();
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
          <Route render={()=><DialogsContainer/>} path="/dialogs"/>
          <Route render={()=><Profile/>} path="/profile/:id"/>
          <Route render={()=><Profile/>} path="/profile" exact/>
          <Route render={()=><Settings/>} path="/settings"/>
          <Route render={()=><Music/>} path="/music"/>
          <Route render={()=><Users/>} path="/users"/>
          <Route render={()=><News/>} path="/news"/>
          <Route render={()=><Login/>} path="/login"/>
          <Route render={()=><Default/>} path="/" exact/>
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

export default compose(
  withRouter,
  connect(mstp,{initializeApp})
)(App);