import propTypes from "prop-types";

import Button from "../Button/Button";

import confirmIcon from "../../assets/images/icon-order-confirmed.svg";

function ConfirmationModal({ cart, onButtonClick }) {
  return (
    <>
      <div></div>
      <dialog>
        <header>
          <img src={confirmIcon} alt="Checkmark" />
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food</p>
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
