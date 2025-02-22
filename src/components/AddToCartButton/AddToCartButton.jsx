import propTypes from "prop-types";

import addToCartImg from "../../assets/images/icon-add-to-cart.svg";
import decrementIcon from "../../assets/images/icon-decrement-quantity.svg";
import incrementIcon from "../../assets/images/icon-increment-quantity.svg";

import classes from "./AddToCartButton.module.css";

export default function AddToCartButton({ amountInCart }) {
  console.log(amountInCart);
  return (
    <button
      className={`${classes.btn} ${
        amountInCart ? classes.change : classes.add
      }`}
    >
      {amountInCart ? (
        <>
          <div className={classes["change-icon"]}>
            <img src={decrementIcon} alt="minus" />
          </div>
          {amountInCart}
          <div className={classes["change-icon"]}>
            <img src={incrementIcon} alt="plus" />
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
