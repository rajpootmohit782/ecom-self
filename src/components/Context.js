import { createContext, useReducer } from "react";

export const CartContext = createContext();
export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
    }
  };
  //  const template= state.filter((item)=>action.payload.key===item.key);
  // if(template.length>0){
  //  return state
  // }

  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <CartContext.Provider value={info}>{props.children}</CartContext.Provider>
  );
};
