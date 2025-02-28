import { useContext } from "react";

import CartContext from "@/context/cart-context";
import CartItem from "@/components/Cart/CartItem/CartItem";

function CartContentList() {
  const { cartContent } = useContext(CartContext);

  return (
    <ul>
      {cartContent.map((item) => (
        <CartItem key={item.name} {...item} />
      ))}
    </ul>
  );
}

export default CartContentList;
