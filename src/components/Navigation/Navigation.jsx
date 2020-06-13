import React from 'react';
import s from './Navigation.module.css';
import Link from './Links/Links.jsx';
import FriendsBar from './FriendsBar/FriendsBar.jsx';

function Navigation(props){
  if (props.state.links === undefined)
    return <div>Добавьте друзей</div>

  let linksUI = props.state.links.map((lnk,key) => <Link key={key} to={lnk.to} txt={lnk.txt} />);

  return (
<nav className={s.nav}>
  {linksUI}
  <FriendsBar friends={props.state.friends} />
</nav>);
}

export default Navigation;