import { createContext } from "react";

const defaultCartContextValues = {
  cartContent: [],
  increaseAmountInCart: () => {},
  decreaseAmountInCart: () => {},
  removeFromCart: () => {},
  emptyCart: () => {},
};

const CartContext = createContext(defaultCartContextValues);

export default CartContext;
