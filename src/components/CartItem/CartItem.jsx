import propTypes from "prop-types";

import RemoveIcon from "../../assets/images/icon-remove-item.svg";

import classes from "./CartItem.module.css";

export default function CartItem({ name, price, amount }) {
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
      <button className={classes.remove}>
        <img src={RemoveIcon} alt="Remove icon" />
      </button>
    </li>
  );
}

CartItem.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  amount: propTypes.number.isRequired,
};
