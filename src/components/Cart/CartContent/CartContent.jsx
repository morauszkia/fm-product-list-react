import { useContext, useState } from "react";
import { createPortal } from "react-dom";

import cakeImg from "@/assets/images/illustration-empty-cart.svg";
import treeImg from "@/assets/images/icon-carbon-neutral.svg";

import CartContext from "@/context/CartContext";
import CartContentList from "@/components/Cart/CartContentList/CartContentList";
import Button from "@/components/Button/Button";
import ConfirmationModal from "@/components/Confirmation/ConfirmationModal/ConfirmationModal";

import classes from "./CartContent.module.css";

function CartContent() {
  const [modalOpen, setModalOpen] = useState(false);

  const { cartContent, totalSum, emptyCart } = useContext(CartContext);

  const startNewOrder = () => {
    setModalOpen(false);
    setTimeout(() => emptyCart(), 300);
  };

  return cartContent.length ? (
    <div className={classes.content}>
      <CartContentList />
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
      {createPortal(
        <ConfirmationModal
          total={totalSum}
          onButtonClick={startNewOrder}
          open={modalOpen}
        />,
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

export default CartContent;
