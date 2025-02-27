import propTypes from "prop-types";

import ProductCard from "../ProductCard/ProductCard";

import classes from "./ProductList.module.css";

import dessertsData from "../../../data/data.json";

function ProductList({ cart, onIncrease, onDecrease }) {
  const getAmountInCart = (name) =>
    cart.find((item) => item.name === name)?.amount;

  return (
    <main>
      <h1 className={classes.title}>Desserts</h1>
      <ul className={classes.grid}>
        {dessertsData.map((dessert) => (
          <ProductCard
            key={dessert.name}
            {...dessert}
            inCart={getAmountInCart(dessert.name)}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        ))}
      </ul>
    </main>
  );
}

ProductList.propTypes = {
  cart: propTypes.array.isRequired,
  onIncrease: propTypes.func,
  onDecrease: propTypes.func,
};

export default ProductList;
