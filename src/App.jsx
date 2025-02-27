import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart/Cart";
import ProductList from "./components/Products/ProductList/ProductList";

function App() {
  const [cartContent, setCartContent] = useState([]);

  const increaseAmountInCart = (item) => {
    const currentCartContent = [...cartContent];
    const itemInCart = currentCartContent.find((i) => i.name === item.name);
    if (itemInCart) {
      itemInCart.amount += 1;
      setCartContent(currentCartContent);
    } else {
      setCartContent([...cartContent, { ...item, amount: 1 }]);
    }
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

  return (
    <>
      <ProductList
        cart={cartContent}
        onIncrease={increaseAmountInCart}
        onDecrease={decreaseAmountInCart}
      />
      <Cart content={cartContent} onRemove={removeFromCart} />
    </>
  );
}

export default App;
