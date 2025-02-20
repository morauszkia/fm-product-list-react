import propTypes from "prop-types";

import CakeImg from "../../assets/images/illustration-empty-cart.svg";
import TreeImg from "../../assets/images/icon-carbon-neutral.svg";

import classes from "./CartContent.module.css";

export default function CartContent({ content }) {
  return content.length ? (
    <div className={classes.content}>
      <ul></ul>
      <hr />
      <div className={classes.total}>
        <p className={classes["total-text"]}>Order Total</p>
        <p className={classes["total-sum"]}>$46.50</p>
      </div>
      <div className={classes.delivery}>
        <img src={TreeImg} alt="Green tree" />
        <p>
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>
      <button className={classes.btn}>Confirm Order</button>
    </div>
  ) : (
    <div className={classes.empty}>
      <img src={CakeImg} alt="Cake" className={classes.img} />
      <p className={classes.text}>Your added items will appear here</p>
    </div>
  );
}

CartContent.propTypes = {
  content: propTypes.array.isRequired,
};
