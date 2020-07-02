const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
  ] 
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type){
    case SEND_MESSAGE: 
      let body = action.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [ ...state.messages, {txt:body,id:6}]
      }    
    default: return state;
  }
}

export default dialogsReducer;


export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE,newMessageBody});