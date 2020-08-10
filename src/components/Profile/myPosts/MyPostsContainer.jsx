import {addPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts.jsx';
import {connect} from 'react-redux';

let mstp = (state) => {
  return {
    posts: state.profileReducer.posts,
    newPostValue: state.profileReducer.newPostValue
  }
}

let mdtp = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
}

const MyPostsContainer = connect(mstp,mdtp)(MyPosts);

export default MyPostsContainer;