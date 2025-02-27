import propTypes from "prop-types";

import Button from "@/components/Button/Button";
import confirmIcon from "@/assets/images/icon-order-confirmed.svg";

import classes from "./ConfirmationModal.module.css";
import ConfirmationModalContent from "../ConfirmationModalContent/ConfirmationModalContent";

function ConfirmationModal({ cart, total, onButtonClick }) {
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
        <ConfirmationModalContent cart={cart} total={total} />
        <Button onClick={onButtonClick}>Start New Order</Button>
      </dialog>
    </>
  );
}

ConfirmationModal.propTypes = {
  cart: propTypes.arrayOf(propTypes.object),
  total: propTypes.string,
  onButtonClick: propTypes.func,
};

export default ConfirmationModal;
