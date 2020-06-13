import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navigationReducer from "./navigationReducer";


let store = {
  _state : {
    profilePage:{
      posts: [
        {id: 0,likesCount:12, txt : "Look at my photo"},
        {id: 1,likesCount:2, txt : "It`s my first post"},
        {id: 2,likesCount:1, txt : "Please like me"},
        {id: 3,likesCount:7, txt : "Call me may be"},
        {id: 4,likesCount:3, txt : "i'm wait"}
      ],
      newPostValue : ""
    },
    dialogsPage:{
      users: [
        {id:1,name:"Anton"},
        {id:2,name:"Yana"},
        {id:3,name:"Dimon"},
        {id:4,name:"Valera"},
        {id:5,name:"Kirill"},
        {id:6,name:"Sanya"},
      ],
      messages : [
        {id:1,txt:"Hi"},
        {id:2,txt:"Hi Hi"},
        {id:3,txt:"How are you?"}
      ],
      newMessageBody: ""
    },    
    navigation:{
      links: [
        {to: "/profile",txt:"Profile"},
        {to: "/dialogs",txt:"Dialogs"},
        {to: "/news",txt:"News"},
        {to: "/music",txt:"Music"},
        {to: "/settings",txt:"Settings"},
      ],
      friends: [
        {name: "Kolya",avatar: "#"},
        {name: "Nastya",avatar: "#"},
        {name: "Petya",avatar: "#"},
        {name: "Lida",avatar: "#"},
      ]
    }
  },
  getState(){
    return this._state;
  },
  _callSubscriber: () =>{
    console.log(" _state was changed ");
  },
  subscribe(observer){
    this._callSubscriber = observer;
  },
  
  dispatch(action){

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navigation = navigationReducer(this._state.navigation, action);
    
    this._callSubscriber(this);    
  }
}



export default store;

window.store = store;