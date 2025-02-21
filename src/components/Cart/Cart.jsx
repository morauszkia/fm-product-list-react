import propTypes from "prop-types";

import CartContent from "../CartContent/CartContent";
import classes from "./Cart.module.css";

export default function Cart({ content }) {
  const amountInCart = content.reduce((total, next) => total + next.amount, 0);

  return (
    <section className={classes.cart}>
      <h2 className={classes.title}>Your Cart ({amountInCart})</h2>
      <CartContent content={content} />
      {/* <CartContent content={[]} /> */}
    </section>
  );
}

Cart.propTypes = {
  content: propTypes.array.isRequired,
};
