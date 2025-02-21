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
  const [cartContent, setCartContent] = useState(DUMMY_CART);

  return (
    <>
      <ProductList cart={cartContent} />
      <Cart content={cartContent} />
    </>
  );
}

export default App;
