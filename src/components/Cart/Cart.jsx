import CakeImg from "../../assets/images/illustration-empty-cart.svg";

import classes from "./Cart.module.css";

export default function Cart() {
  return (
    <section className={classes.cart}>
      <h2 className={classes.title}>Your Cart (0)</h2>
      <div className={classes.content}>
        <img src={CakeImg} alt="Cake" className={classes.img} />
        <p className={classes.text}>Your added items will appear here</p>
      </div>
    </section>
  );
}
