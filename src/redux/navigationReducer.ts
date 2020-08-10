type LinkType = {
  to: string
  txt: string
}
type FriendType = {
  name: string
  avatar: string
}

let initialState = {
  links: [
    {to: "/profile",txt:"Profile"},
    {to: "/dialogs",txt:"Dialogs"},
    {to: "/news",txt:"News"},
    {to: "/music",txt:"Music"},
    {to: "/settings",txt:"Settings"},
    {to: "/users", txt:"Users"}
  ] as Array<LinkType>,
  friends: [
    {name: "Kolya",avatar: "#"},
    {name: "Nastya",avatar: "#"},
    {name: "Petya",avatar: "#"},
    {name: "Lida",avatar: "#"},
  ] as Array<FriendType>
};

type InitialStateType = typeof initialState;

const navigationReducer = (state = initialState, action:any) => {
  switch (action.type){
    default: return {...state};
  }
}

export default navigationReducer;