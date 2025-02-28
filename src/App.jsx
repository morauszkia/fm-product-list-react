import { useEffect, useState } from "react";
import Cart from "@/components/Cart/Cart/Cart";
import ProductList from "@/components/Products/ProductList/ProductList";

function App() {
  const [cartContent, setCartContent] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartContent));
  }, [cartContent]);

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

  const emptyCart = () => {
    setCartContent([]);
  };

  return (
    <>
      <ProductList
        cart={cartContent}
        onIncrease={increaseAmountInCart}
        onDecrease={decreaseAmountInCart}
      />
      <Cart
        content={cartContent}
        onRemove={removeFromCart}
        onConfirm={emptyCart}
      />
    </>
  );
}

export default App;
