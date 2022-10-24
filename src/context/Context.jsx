import React, { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./Reducers";
import CardData from "../data/Data";

const Cart = createContext();

const Context = ({ children }) => {
  const products = CardData;

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
