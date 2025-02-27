import { getImageURL } from "@/util/image-util";
import propTypes from "prop-types";

function ConfirmationModalListItem({ thumbnail, name, price, amount }) {
  return (
    <li>
      <img src={getImageURL(thumbnail)} alt={name} />
      <div>
        <p>{name}</p>
        <p>
          <span>{amount}x</span>
          <span>@ ${price.toFixed(2)}</span>
        </p>
      </div>
      <p>${(amount * price).toFixed(2)}</p>
    </li>
  );
}

ConfirmationModalListItem.propTypes = {
  thumbnail: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  amount: propTypes.number.isRequired,
};

export default ConfirmationModalListItem;
