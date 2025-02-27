import propTypes from "prop-types";

import CartItem from "@/components/Cart/CartItem/CartItem";

function CartContentList({ content, onRemove }) {
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
  content: propTypes.arrayOf([
    propTypes.shape({
      name: propTypes.string,
      price: propTypes.number,
      amount: propTypes.number,
    }),
  ]).isRequired,
  onRemove: propTypes.func,
};

export default CartContentList;
