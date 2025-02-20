import { useState } from "react";
import CartContent from "../CartContent/CartContent";
import classes from "./Cart.module.css";

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

export default function Cart() {
  const amountInCart = DUMMY_CART.reduce(
    (total, next) => total + next.amount,
    0
  );

  const [cartAmount, setCartAmount] = useState(amountInCart);

  return (
    <section className={classes.cart}>
      <h2 className={classes.title}>Your Cart ({cartAmount})</h2>
      <CartContent content={DUMMY_CART} />
      {/* <CartContent content={[]} /> */}
    </section>
  );
}
