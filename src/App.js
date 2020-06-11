import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';

function App(props) {
  return (
<BrowserRouter>
  <div className="app-wrapper">
    <Header/>    
    <Navigation state={props.state.navigation} />
    <div className="mainContent">
      <Route render={()=><Dialogs state={props.state.dialogsPage} />} path="/dialogs" />
      <Route render={()=><Profile state={props.state} dispatch={props.dispatch} />} path="/profile" />      
      <Route component={News} path="/news" />      
      <Route component={Music} path="/music" />      
      <Route component={Settings} path="/settings" />      
    </div>
  </div>
</BrowserRouter>
  );
}


export default App;
