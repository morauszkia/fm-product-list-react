import propTypes from "prop-types";

import CartItem from "../CartItem/CartItem";

export default function CartContentList({ content }) {
  return (
    <ul>
      {content.map((item) => (
        <CartItem key={item.name} {...item} />
      ))}
    </ul>
  );
}

CartContentList.propTypes = {
  content: propTypes.array.isRequired,
};
