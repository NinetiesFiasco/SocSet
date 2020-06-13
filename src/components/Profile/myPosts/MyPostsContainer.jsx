import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/profileReducer.js';
import MyPosts from './MyPosts.jsx';
import StoreContext from '../../../StoreContext.js';

function MyPostsContainer(props){
  
  return (
    <StoreContext.Consumer >{(store) =>{
      let state = store.getState();
      
      let addPost = () => {
        store.dispatch(addPostActionCreator());
      }

      let updateNewPostText = (text) =>{
        let action = updateNewPostTextActionCreator(text);
        store.dispatch(action);
      }

      return <MyPosts 
          updateNewPostText={updateNewPostText} 
          addPost={addPost} 
          posts={state.profileReducer.posts} 
          newPostValue={state.profileReducer.newPostValue} 
      />
    }}
    </StoreContext.Consumer>
   );
} 

export default MyPostsContainer;