import CartContent from "@/components/Cart/CartContent/CartContent";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "@/context/CartContext";

function Cart() {
  const { cartContent } = useContext(CartContext);

  const amountInCart = cartContent.reduce(
    (total, next) => total + next.amount,
    0
  );

  return (
    <section className={classes.cart}>
      <h2 className={classes.title}>Your Cart ({amountInCart})</h2>
      <CartContent />
    </section>
  );
}

export default Cart;
