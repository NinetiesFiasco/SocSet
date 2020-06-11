import React from 'react';
import s from './Post.module.css';

function Post(props){
  
  return ( 
<div className={s.post}>
  <img alt="avatar" src='https://i.pinimg.com/originals/2d/9c/24/2d9c2451a85575c2c1010ce9e784c17c.jpg'/>
  <span>{props.txt}</span>
  <div>
    <span>Like {props.likesCount}</span>&nbsp;&nbsp;&nbsp;
    <span>Share</span>
  </div>
</div>
   );
}

export default Post;