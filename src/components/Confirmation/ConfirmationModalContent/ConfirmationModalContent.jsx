import propTypes from "prop-types";

import classes from "./ConfirmationModalContent.module.css";

function ConfirmationModalContent({ cart }) {
  return (
    <section className={classes.content}>
      <ul>
        {cart.map((item) => (
          <li key={item.name}>{item.name}</li>
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
