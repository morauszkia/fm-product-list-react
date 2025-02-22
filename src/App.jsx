import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/ProductList/ProductList";

const DUMMY_CART = [
  {
    name: "Classic Tiramisu",
    price: 5.5,
    amount: 1,
  },
  {
    name: "Vanilla Bean Crème Brûlée",
    price: 7.0,
    amount: 4,
  },
  {
    name: "Vanilla Panna Cotta",
    price: 6.5,
    amount: 2,
  },
];

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

  const decreaseAmountInCart = (item) => {};

  const removeFromCart = (item) => {};

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
