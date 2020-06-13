const ADD_POST = "ADD-POST",
UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    {id: 0,likesCount:12, txt : "Look at my photo"},
    {id: 1,likesCount:2, txt : "It`s my first post"},
    {id: 2,likesCount:1, txt : "Please like me"},
    {id: 3,likesCount:7, txt : "Call me may be"},
    {id: 4,likesCount:3, txt : "i'm wait"}
  ],
  newPostValue : ""
};

const profileReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_POST:
      let newPost = {
        id: 5,
        txt: state.newPostValue,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostValue = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostValue = action.payload;
      return state;
    default: return state;
  }
}

export default profileReducer; 


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>({
    type: UPDATE_NEW_POST_TEXT,
    payload: text
  });