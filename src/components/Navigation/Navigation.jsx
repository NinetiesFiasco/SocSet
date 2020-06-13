import React from 'react';
import s from './Navigation.module.css';
import Link from './Links/Links.jsx';
import FriendsBar from './FriendsBar/FriendsBar.jsx';
import StoreContext from '../../StoreContext.js';

function Navigation(props){

  return (
<StoreContext.Consumer>
  {store=>{
  if (store==null)return <div>Netu stora</div>
  let state = store.getState().navigationReducer;

  if (state.links === undefined)
  return <div>Добавьте друзей</div> 

  let linksUI = state.links.map((lnk,key) => <Link key={key} to={lnk.to} txt={lnk.txt} />);
  
  return (<nav className={s.nav}>
    {linksUI}
    <FriendsBar friends={state.friends} />
  </nav>)
}}
</StoreContext.Consumer>);
}

export default Navigation;