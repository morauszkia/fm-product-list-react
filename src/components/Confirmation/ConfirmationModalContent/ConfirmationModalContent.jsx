import propTypes from "prop-types";

import classes from "./ConfirmationModalContent.module.css";
import ConfirmationModalListItem from "../ConfirmationModalListItem/ConfirmationModalListItem";

function ConfirmationModalContent({ cart, total }) {
  return (
    <section className={classes.content}>
      <ul className={classes.list}>
        {cart.map((item) => (
          <ConfirmationModalListItem key={item.name} {...item} />
        ))}
      </ul>
      <hr />
      <div className={classes.total}>
        <p>Order Total</p>
        <p className={classes.sum}>${total}</p>
      </div>
    </section>
  );
}

ConfirmationModalContent.propTypes = {
  cart: propTypes.arrayOf(propTypes.object),
  total: propTypes.string,
};

export default ConfirmationModalContent;
