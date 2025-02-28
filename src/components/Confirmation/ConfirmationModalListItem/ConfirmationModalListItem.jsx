import { getImageURL } from "@/util/image-util";
import propTypes from "prop-types";

import classes from "./ConfirmationModalListItem.module.css";

function ConfirmationModalListItem({ thumbnail, name, price, amount }) {
  return (
    <li className={classes.row}>
      <img
        src={getImageURL(thumbnail)}
        alt={name}
        className={classes.thumbnail}
      />
      <div className={classes.details}>
        <p>{name}</p>
        <p className={classes.calculation}>
          <span className={classes.amount}>{amount}x&nbsp;</span>
          <span className={classes.price}>@ ${price.toFixed(2)}</span>
        </p>
      </div>
      <p className={classes.total}>${(amount * price).toFixed(2)}</p>
    </li>
  );
}

ConfirmationModalListItem.propTypes = {
  thumbnail: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  amount: propTypes.number.isRequired,
};

export default ConfirmationModalListItem;
