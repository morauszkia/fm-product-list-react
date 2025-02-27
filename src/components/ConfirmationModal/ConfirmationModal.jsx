import propTypes from "prop-types";

import Button from "../Button/Button";
import confirmIcon from "../../assets/images/icon-order-confirmed.svg";

import classes from "./ConfirmationModal.module.css";

function ConfirmationModal({ cart, onButtonClick }) {
  return (
    <>
      <div className={classes.backdrop}></div>
      <dialog className={classes.modal}>
        <header>
          <img
            src={confirmIcon}
            alt="Checkmark"
            className={classes.checkmark}
          />
          <h2 className={classes.title}>Order Confirmed</h2>
          <p className={classes.text}>We hope you enjoy your food</p>
        </header>
        <section>
          <ul>
            {cart.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
          <div>
            <p>Order Total</p>
            <p>$46.50</p>
          </div>
        </section>
        <Button onClick={onButtonClick}>Start New Order</Button>
      </dialog>
    </>
  );
}

ConfirmationModal.propTypes = {
  cart: propTypes.arrayOf(propTypes.object),
  onButtonClick: propTypes.func,
};

export default ConfirmationModal;
