import { useState } from "react";
import { createPortal } from "react-dom";
import propTypes from "prop-types";

import cakeImg from "../../assets/images/illustration-empty-cart.svg";
import treeImg from "../../assets/images/icon-carbon-neutral.svg";

import CartContentList from "../CartContentList/CartContentList";
import Button from "../Button/Button";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

import classes from "./CartContent.module.css";

function CartContent({ content, onRemove }) {
  const [modalOpen, setModalOpen] = useState(false);

  const totalSum = content
    .reduce((sum, item) => sum + item.amount * item.price, 0)
    .toFixed(2);

  const startNewOrder = () => {
    setModalOpen(false);
  };

  return content.length ? (
    <div className={classes.content}>
      <CartContentList content={content} onRemove={onRemove} />
      <hr />
      <div className={classes.total}>
        <p className={classes["total-text"]}>Order Total</p>
        <p className={classes["total-sum"]}>${totalSum}</p>
      </div>
      <div className={classes.delivery}>
        <img src={treeImg} alt="Green tree" />
        <p>
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>
      <Button className={classes.btn} onClick={() => setModalOpen(true)}>
        Confirm Order
      </Button>
      {modalOpen &&
        createPortal(
          <ConfirmationModal cart={content} onButtonClick={startNewOrder} />,
          document.getElementById("modal")
        )}
    </div>
  ) : (
    <div className={classes.empty}>
      <img src={cakeImg} alt="Cake" className={classes.img} />
      <p className={classes.text}>Your added items will appear here</p>
    </div>
  );
}

CartContent.propTypes = {
  content: propTypes.arrayOf([
    propTypes.shape({
      name: propTypes.string,
      price: propTypes.number,
      amount: propTypes.number,
    }),
  ]).isRequired,
  onRemove: propTypes.func,
};

export default CartContent;
