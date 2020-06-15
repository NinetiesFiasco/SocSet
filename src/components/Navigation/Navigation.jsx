import React from 'react';
import s from './Navigation.module.css';
import Link from './Links/Links.jsx';
import FriendsBar from './FriendsBar/FriendsBar.jsx';
import {connect} from 'react-redux';

function Navigation(props){

  let linksUI = props.links.map((lnk,key) => <Link key={key} to={lnk.to} txt={lnk.txt} />);

  return (
  <nav className={s.nav}>
    {linksUI}
    <FriendsBar friends={props.friends} />
  </nav>)
}

export default connect(
  (state) => {
    return {
      links: state.navigationReducer.links,
      friends: state.navigationReducer.friends
    }
  },
  (dispatch) => {return {};}
)(Navigation);