const SEND_MESSAGE = "SEND_MESSAGE",
UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

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
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type){
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.payload;
      return state;
    case SEND_MESSAGE: 
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({
        txt: body,
        id: 6
      });
      return state;
    default: return state;

  }
}

export default dialogsReducer;


export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  payload: text
}); 
