import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {reduxForm,Field} from 'redux-form';

function MyPosts(props){
  
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }
   
  let postsUI = props.posts.map((post,key)=><Post key={key} txt={post.txt} likesCount={post.likesCount}/>);

  return (
  <div className={s.postsContainer}>
    <div>      
      <h3>My posts</h3>
      <div>
      </div>
    </div>
    <div className={s.posts}>
      {postsUI}
    </div>
    <NewPostFormRedux onSubmit={onAddPost} />
  </div>
   );
}

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={"textarea"} />
      </div>
      <div>
        <button>Add Post</button>     
      </div>
    </form>
  )
}

const NewPostFormRedux = reduxForm({form: 'addNewPost'})(NewPostForm);


export default MyPosts;