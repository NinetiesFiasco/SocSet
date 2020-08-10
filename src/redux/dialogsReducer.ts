const SEND_MESSAGE = "SEND_MESSAGE";

type DialogType = {
  id: number
  name: string
}
type MessageType = {
  id: number
  txt: string
}

let initialState = {
  users: [
    {id:1,name:"Anton"},
    {id:2,name:"Yana"},
    {id:3,name:"Dimon"},
    {id:4,name:"Valera"},
    {id:5,name:"Kirill"},
    {id:6,name:"Sanya"},
  ] as Array<DialogType>,
  messages : [
    {id:1,txt:"Hi"},
    {id:2,txt:"Hi Hi"},
    {id:3,txt:"How are you?"}
  ] as Array<MessageType>,
  newMessageBody: ""
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action:any):InitialStateType => {
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
 
type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string):SendMessageCreatorActionType => ({
  type: SEND_MESSAGE,newMessageBody
});