import propTypes from "prop-types";

import { getImageURL } from "../../util/image-util";

import classes from "./ProductCard.module.css";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

function ProductCard({
  image,
  name,
  category,
  price,
  inCart,
  onIncrease,
  onDecrease,
}) {
  return (
    <li>
      <div className={classes["img-container"]}>
        <picture
          className={`${classes.img} ${inCart ? classes["in-cart"] : ""}`}
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
          amountInCart={inCart}
          onIncrease={() => {
            onIncrease({ name: name, price: price });
          }}
          onDecrease={() => {
            onDecrease(name);
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
  inCart: propTypes.number,
  onIncrease: propTypes.func,
  onDecrease: propTypes.func,
};

export default ProductCard;
