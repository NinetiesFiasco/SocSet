import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/state.js';

function MyPosts(props){
  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let updateNewPostText = (e) =>{ 
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  let postsUI = props.state.profilePage.posts.map((post,key)=><Post key={key} txt={post.txt} likesCount={post.likesCount}/>);
  return (
  <div className={s.postsContainer}>
    <div>      
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} value={props.state.profilePage.newPostValue} onChange={updateNewPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>        
        </div>
      </div>
    </div>
    <div className={s.posts}>
      {postsUI}
    </div>
  </div>
   );
}

export default MyPosts;