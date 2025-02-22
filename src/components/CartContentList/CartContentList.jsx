import propTypes from "prop-types";

import CartItem from "../CartItem/CartItem";

export default function CartContentList({ content, onRemove }) {
  return (
    <ul>
      {content.map((item) => (
        <CartItem
          key={item.name}
          {...item}
          onRemove={() => {
            onRemove(item.name);
          }}
        />
      ))}
    </ul>
  );
}

CartContentList.propTypes = {
  content: propTypes.array.isRequired,
  onRemove: propTypes.func,
};
