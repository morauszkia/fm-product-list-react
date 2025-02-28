import { useContext } from "react";

import CartContext from "@/context/CartContext";
import ConfirmationModalListItem from "../ConfirmationModalListItem/ConfirmationModalListItem";

import classes from "./ConfirmationModalContent.module.css";

function ConfirmationModalContent() {
  const { cartContent, totalSum } = useContext(CartContext);

  return (
    <section className={classes.content}>
      <ul>
        {cartContent.map((item) => (
          <ConfirmationModalListItem key={item.name} {...item} />
        ))}
      </ul>
      <hr />
      <div className={classes.total}>
        <p>Order Total</p>
        <p className={classes.sum}>${totalSum}</p>
      </div>
    </section>
  );
}

export default ConfirmationModalContent;
