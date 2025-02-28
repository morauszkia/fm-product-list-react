import propTypes from "prop-types";

import Button from "@/components/Button/Button";
import confirmIcon from "@/assets/images/icon-order-confirmed.svg";

import classes from "./ConfirmationModal.module.css";
import ConfirmationModalContent from "../ConfirmationModalContent/ConfirmationModalContent";

function ConfirmationModal({ onButtonClick, open }) {
  return (
    <>
      {open && <div className={classes.backdrop} />}
      <dialog className={`${classes.modal} ${open ? classes.open : ""}`}>
        <header>
          <img
            src={confirmIcon}
            alt="Checkmark"
            className={classes.checkmark}
          />
          <h2 className={classes.title}>Order Confirmed</h2>
          <p className={classes.text}>We hope you enjoy your food</p>
        </header>
        <ConfirmationModalContent />
        <Button onClick={onButtonClick}>Start New Order</Button>
      </dialog>
    </>
  );
}

ConfirmationModal.propTypes = {
  onButtonClick: propTypes.func,
  open: propTypes.bool,
};

export default ConfirmationModal;
