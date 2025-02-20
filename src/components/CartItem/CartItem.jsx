import propTypes from "prop-types";

import RemoveIcon from "../../assets/images/icon-remove-item.svg";

export default function CartItem({ name, price, amount }) {
  return (
    <li>
      <div>
        <p>{name}</p>
        <p>
          <span>{amount}x</span> <span>@ ${price.toFixed(2)}</span>{" "}
          <span>${(amount * price).toFixed(2)}</span>
        </p>
      </div>
      <button>
        <img src={RemoveIcon} alt="Remove icon" />
      </button>
    </li>
  );
}

CartItem.propTypes = {
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  amount: propTypes.number.isRequired,
};
