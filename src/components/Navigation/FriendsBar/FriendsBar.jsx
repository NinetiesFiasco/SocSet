import React from 'react';
import s from './FriendsBar.module.css';
import Friend from './Friend/Friend.jsx';

function FriendsBar(props){

  let friendsUI = props.friends.map((frd,key) => <Friend key={key} name={frd.name}/>);
  return (
<div className={s.content}>
  <h3>FriendsBar</h3>
  <div className={s.friendsContainer}>
    {friendsUI}
  </div>
</div>)
}

export default FriendsBar;