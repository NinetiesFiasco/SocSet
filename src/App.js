import React from 'react';
import {Route} from 'react-router-dom';
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

function App(props){
  return (
  <div className="app-wrapper">
    <Header/>
    <Navigation/>
    <div className="mainContent">
      <Route render={()=><DialogsContainer/>} path="/dialogs"/>
      <Route render={()=><Profile/>} path="/profile/:id"/>
      <Route render={()=><Profile/>} path="/profile" exact/>
      <Route component={Settings} path="/settings"/>
      <Route component={Music} path="/music"/>
      <Route component={Users} path="/users"/>
      <Route component={News} path="/news"/>
      <Route component={Default} path="/" exact/>
    </div>
  </div>
  );
}

export default App;