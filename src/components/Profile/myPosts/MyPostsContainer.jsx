import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/profileReducer.js';
import MyPosts from './MyPosts.jsx';

function MyPostsContainer(props){
  
  let state = props.store.getState();
  
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let updateNewPostText = (text) =>{
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <MyPosts 
        updateNewPostText={updateNewPostText} 
        addPost={addPost} 
        posts={state.profileReducer.posts} 
        newPostValue={state.profileReducer.newPostValue} 
    />
   );
} 

export default MyPostsContainer;