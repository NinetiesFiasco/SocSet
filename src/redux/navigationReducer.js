let initialState = {
  links: [
    {to: "/profile",txt:"Profile"},
    {to: "/dialogs",txt:"Dialogs"},
    {to: "/news",txt:"News"},
    {to: "/music",txt:"Music"},
    {to: "/settings",txt:"Settings"},
    {to: "/users", txt:"Users"}
  ],
  friends: [
    {name: "Kolya",avatar: "#"},
    {name: "Nastya",avatar: "#"},
    {name: "Petya",avatar: "#"},
    {name: "Lida",avatar: "#"},
  ]
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type){
    default: return {...state};
  }
}

export default navigationReducer;