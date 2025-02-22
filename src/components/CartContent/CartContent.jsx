import propTypes from "prop-types";

import cakeImg from "../../assets/images/illustration-empty-cart.svg";
import treeImg from "../../assets/images/icon-carbon-neutral.svg";

import classes from "./CartContent.module.css";
import CartContentList from "../CartContentList/CartContentList";

export default function CartContent({ content }) {
  const totalSum = content
    .reduce((sum, item) => sum + item.amount * item.price, 0)
    .toFixed(2);

  return content.length ? (
    <div className={classes.content}>
      <CartContentList content={content} />
      <hr />
      <div className={classes.total}>
        <p className={classes["total-text"]}>Order Total</p>
        <p className={classes["total-sum"]}>${totalSum}</p>
      </div>
      <div className={classes.delivery}>
        <img src={treeImg} alt="Green tree" />
        <p>
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>
      <button className={classes.btn}>Confirm Order</button>
    </div>
  ) : (
    <div className={classes.empty}>
      <img src={cakeImg} alt="Cake" className={classes.img} />
      <p className={classes.text}>Your added items will appear here</p>
    </div>
  );
}

CartContent.propTypes = {
  content: propTypes.array.isRequired,
};
