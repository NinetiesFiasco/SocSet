import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/profileReducer.js';
import MyPosts from './MyPosts.jsx';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profileReducer.posts,
    newPostValue: state.profileReducer.newPostValue
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) =>{
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;