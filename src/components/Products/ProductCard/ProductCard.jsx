import { useContext } from "react";
import propTypes from "prop-types";

import { getImageURL } from "@/util/image-util";

import AddToCartButton from "@/components/Products/AddToCartButton/AddToCartButton";
import CartContext from "@/context/cart-context";

import classes from "./ProductCard.module.css";

function ProductCard({ image, name, category, price }) {
  const { cartContent, increaseAmountInCart, decreaseAmountInCart } =
    useContext(CartContext);

  const getAmountInCart = () => {
    const itemInCart = cartContent.find((item) => item.name === name);
    return itemInCart?.amount;
  };

  const amount = getAmountInCart();

  return (
    <li>
      <div className={classes["img-container"]}>
        <picture
          className={`${classes.img} ${amount ? classes["in-cart"] : ""}`}
        >
          <source
            media="(min-width: 740px) and (max-width: 989px)"
            srcSet={getImageURL(image.tablet)}
          />
          <source
            media="(min-width: 990px)"
            srcSet={getImageURL(image.desktop)}
          />
          <img src={getImageURL(image.mobile)} alt="Waffle with Berries" />
        </picture>
        <AddToCartButton
          amountInCart={amount}
          onIncrease={() => {
            increaseAmountInCart({
              name: name,
              price: price,
              thumbnail: image.thumbnail,
            });
          }}
          onDecrease={() => {
            decreaseAmountInCart(name);
          }}
        />
      </div>
      <div className={classes["card--text"]}>
        <p className={classes.category}>{category}</p>
        <p className={classes.name}>{name}</p>
        <p className={classes.price}>${price.toFixed(2)}</p>
      </div>
    </li>
  );
}

ProductCard.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.object.isRequired,
  category: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
};

export default ProductCard;
