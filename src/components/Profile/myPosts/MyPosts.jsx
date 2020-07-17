import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {reduxForm,Field} from 'redux-form';
import { requiredField, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';


const MyPosts = React.memo((props) => {
  
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }
   
  // Иммутабельность (без спреда реверс будет разворачивать объект каждую отрисовку)
  let postsUI = [...props.posts].reverse().map((post,key)=><Post key={key} txt={post.txt} likesCount={post.likesCount}/>);

  return (
  <div className={s.postsContainer}>
    <div>      
      <h3>My posts</h3>
      <div>
      </div>
    </div>
    <NewPostFormRedux onSubmit={onAddPost} />
    <div className={s.posts}>
      {postsUI}
    </div>
  </div>
   );
});

let lengthValidator = maxLengthCreator(30);
const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} placeholder="Post message" validate={[requiredField,lengthValidator]} />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  )
}

const NewPostFormRedux = reduxForm({form: 'addNewPost'})(NewPostForm);


export default MyPosts;