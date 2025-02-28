import propTypes from "prop-types";

import RemoveIcon from "@/assets/images/icon-remove-item.svg?react";

import classes from "./CartItem.module.css";

function CartItem({ name, price, amount, onRemove }) {
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
      <button className={classes.remove} onClick={onRemove}>
        <RemoveIcon />
      </button>
    </li>
  );
}

CartItem.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  amount: propTypes.number.isRequired,
  onRemove: propTypes.func,
};

export default CartItem;
