import  profileReducer,{addPostActionCreator, deletePost} from "./profileReducer";

  let initialState = {
    posts: [
      {id: 0,likesCount:12, txt : "Look at my photo"},
      {id: 1,likesCount:2, txt : "It`s my first post"},
      {id: 2,likesCount:1, txt : "Please like me"},
      {id: 3,likesCount:7, txt : "Call me may be"},
      {id: 4,likesCount:3, txt : "i'm wait"}
    ],
    profile: null,
    status: ""
  };
  
test('New post shoud be added', () => {
  // 1. test data
  let action = addPostActionCreator("it's working");
  // 2. action
  let newState = profileReducer(initialState, action); 
  // 3. expectation
  expect(newState.posts[5].txt).toBe("it's working");
});

test('New post message must be', () => {
  // 1. test data
  let action = addPostActionCreator("it's working");
  // 2. action
  let newState = profileReducer(initialState, action);
  // 3. expectation
  expect(newState.posts.length).toBe(6);
});

test('After delete length', () => {
  // 1. test data
  let action = deletePost(4);
  // 2. action
  let newState = profileReducer(initialState, action);
  // 3. expectation
  expect(newState.posts.length).toBe(4);
});

test("Delete don't work with bad ID", () => {
  // 1. test data
  let action = deletePost(1000);
  // 2. action
  let newState = profileReducer(initialState, action);
  // 3. expectation
  expect(newState.posts.length).toBe(5);
});



//profileReducer