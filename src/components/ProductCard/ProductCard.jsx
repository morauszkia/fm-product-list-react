import propTypes from "prop-types";

import { getImageURL } from "../../util/image-util";
import addToCartImg from "../../assets/images/icon-add-to-cart.svg";

import classes from "./ProductCard.module.css";

export default function ProductCard({ image, name, category, price }) {
  return (
    <li>
      <div className={classes["img-container"]}>
        <picture className={classes.img}>
          <source
            media="(min-width: 600px) and (max-width: 799px)"
            srcSet={getImageURL(image.tablet)}
          />
          <source
            media="(min-width: 800px)"
            srcSet={getImageURL(image.desktop)}
          />
          <img src={getImageURL(image.mobile)} alt="Waffle with Berries" />
        </picture>
        <button className={classes["btn--add"]}>
          <img src={addToCartImg} alt="" />
          Add to Cart
        </button>
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
