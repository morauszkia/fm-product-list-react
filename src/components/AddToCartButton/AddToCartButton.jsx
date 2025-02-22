import propTypes from "prop-types";

import addToCartImg from "../../assets/images/icon-add-to-cart.svg";
import DecrementIcon from "../../assets/images/icon-decrement-quantity.svg?react";
import IncrementIcon from "../../assets/images/icon-increment-quantity.svg?react";

import classes from "./AddToCartButton.module.css";

export default function AddToCartButton({ amountInCart }) {
  return (
    <button
      className={`${classes.btn} ${
        amountInCart ? classes.change : classes.add
      }`}
    >
      {amountInCart ? (
        <>
          <div className={classes["change-icon"]}>
            <DecrementIcon />
          </div>
          {amountInCart}
          <div className={classes["change-icon"]}>
            <IncrementIcon />
          </div>
        </>
      ) : (
        <>
          <img src={addToCartImg} alt="Cart logo" />
          Add to Cart
        </>
      )}
    </button>
  );
}

AddToCartButton.propTypes = {
  amountInCart: propTypes.number,
};
