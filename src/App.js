import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';

function App(props) {
  return (
  <div className="app-wrapper">
    <Header/>    
    <Navigation />
    <div className="mainContent">
      <Route render={()=><DialogsContainer  />} path="/dialogs" />
      <Route render={()=><Profile />} path="/profile" />      
      <Route component={News} path="/news" />      
      <Route component={Music} path="/music" />      
      <Route component={Settings} path="/settings" />      
    </div>
  </div>
  );
}


export default App;
