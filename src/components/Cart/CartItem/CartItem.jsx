import { useContext } from "react";
import propTypes from "prop-types";

import CartContext from "@/context/cart-context";
import RemoveIcon from "@/assets/images/icon-remove-item.svg?react";

import classes from "./CartItem.module.css";

function CartItem({ name, price, amount }) {
  const { removeFromCart } = useContext(CartContext);

  return (
    <li className={classes.row}>
      <div className={classes.text}>
        <p className={classes.name}>{name}</p>
        <p className={classes.calculation}>
          <span className={classes.amount}>{amount}x&nbsp;</span>{" "}
          <span className={classes.price}>@ ${price.toFixed(2)}</span>{" "}
          <span className={classes.total}>${(amount * price).toFixed(2)}</span>
        </p>
      </div>
      <button
        className={classes.remove}
        onClick={removeFromCart.bind(null, name)}
      >
        <RemoveIcon />
      </button>
    </li>
  );
}

CartItem.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  amount: propTypes.number.isRequired,
};

export default CartItem;
