import propTypes from "prop-types";

import addToCartImg from "../../assets/images/icon-add-to-cart.svg";
import DecrementIcon from "../../assets/images/icon-decrement-quantity.svg?react";
import IncrementIcon from "../../assets/images/icon-increment-quantity.svg?react";

import classes from "./AddToCartButton.module.css";

export default function AddToCartButton({
  amountInCart,
  onIncrease,
  onDecrease,
}) {
  if (amountInCart) {
    return (
      <button className={`${classes.btn} ${classes.change}`}>
        <div className={classes["change-icon"]} onClick={onDecrease}>
          <DecrementIcon />
        </div>
        {amountInCart}
        <div className={classes["change-icon"]} onClick={onIncrease}>
          <IncrementIcon />
        </div>
      </button>
    );
  } else {
    return (
      <button className={`${classes.btn} ${classes.add}`} onClick={onIncrease}>
        <img src={addToCartImg} alt="Cart logo" />
        Add to Cart
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  amountInCart: propTypes.number,
  onIncrease: propTypes.func,
  onDecrease: propTypes.func,
};
