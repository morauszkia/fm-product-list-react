import propTypes from "prop-types";

import classes from "./ConfirmationModalContent.module.css";
import ConfirmationModalListItem from "../ConfirmationModalListItem/ConfirmationModalListItem";

function ConfirmationModalContent({ cart }) {
  return (
    <section className={classes.content}>
      <ul>
        {cart.map((item) => (
          <ConfirmationModalListItem key={item.name} {...item} />
        ))}
      </ul>
      <hr />
      <div className={classes.total}>
        <p>Order Total</p>
        <p className={classes.sum}>$46.50</p>
      </div>
    </section>
  );
}

ConfirmationModalContent.propTypes = {
  cart: propTypes.arrayOf(propTypes.object),
};

export default ConfirmationModalContent;
