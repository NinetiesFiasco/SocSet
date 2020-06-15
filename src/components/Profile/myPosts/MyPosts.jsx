import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

function MyPosts(props){
  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.addPost();
  }
  
  let updateNewPostText = (e) =>{ 
    let text = newPostElement.current.value;
    props.updateNewPostText(text);    
  }

  let postsUI = props.posts.map((post,key)=><Post key={key} txt={post.txt} likesCount={post.likesCount}/>);

  return (
  <div className={s.postsContainer}>
    <div>      
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} value={props.newPostValue} onChange={updateNewPostText}></textarea>
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