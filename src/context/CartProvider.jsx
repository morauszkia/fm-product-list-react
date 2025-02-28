import CartContext from "./cart-context";

import { useEffect, useState } from "react";
import propTypes from "prop-types";

function CartProvider({ children }) {
  const [cartContent, setCartContent] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartContent));
  }, [cartContent]);

  const totalSum = cartContent
    .reduce((sum, item) => sum + item.amount * item.price, 0)
    .toFixed(2);

  const increaseAmountInCart = (item) => {
    const currentCartContent = [...cartContent];
    const itemInCart = currentCartContent.find((i) => i.name === item.name);
    if (itemInCart) {
      itemInCart.amount += 1;
      setCartContent(currentCartContent);
    } else {
      setCartContent([...cartContent, { ...item, amount: 1 }]);
    }
    localStorage.setItem("cart", JSON.stringify(cartContent));
  };

  const decreaseAmountInCart = (name) => {
    const currentCartContent = [...cartContent];
    const itemInCart = currentCartContent.find((i) => i.name === name);
    if (itemInCart.amount > 1) {
      itemInCart.amount -= 1;
      setCartContent(currentCartContent);
    } else {
      const updatedCartContent = currentCartContent.filter(
        (i) => i.name !== name
      );
      setCartContent(updatedCartContent);
    }
  };

  const removeFromCart = (name) => {
    const updatedCartContent = cartContent.filter((i) => i.name !== name);
    setCartContent(updatedCartContent);
  };

  const emptyCart = () => {
    setCartContent([]);
  };

  const value = {
    cartContent,
    totalSum,
    increaseAmountInCart,
    decreaseAmountInCart,
    removeFromCart,
    emptyCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: propTypes.element,
};

export default CartProvider;
