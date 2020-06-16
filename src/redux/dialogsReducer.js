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
  debugger;
  switch (action.type){
    case UPDATE_NEW_MESSAGE_BODY:{
      let stateCopy = {...state} 
      stateCopy.newMessageBody = action.payload;
      return stateCopy;
    }
    case SEND_MESSAGE: {
      let stateCopy = {...state};
      let body = stateCopy.newMessageBody;      
      stateCopy.newMessageBody = "";
      stateCopy.messages = [...stateCopy.messages];
      stateCopy.messages.push({
        txt: body,
        id: 6
      });
      return stateCopy;
    }
    default: return state;

  }
}

export default dialogsReducer;


export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  payload: text
}); 
